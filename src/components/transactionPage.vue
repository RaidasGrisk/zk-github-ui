<script setup>
import { ref, watch, onMounted, h } from 'vue'
import { useNotification, NSpin } from 'naive-ui'
import { Mina, PublicKey, shutdown, Field, Signature, fetchAccount } from 'snarkyjs';

onMounted(async () => {
  console.log('Mounted')
})

// constants
const zkAppAddress = 'B62qq1tktxLsPAvL3QytnyqMCnUvn9NrUuXGJgPGAhQUacdKzupE2Kp'
const url = 'https://proxy.berkeley.minaexplorer.com/graphql'

// storage refs
const notification = useNotification()
const accounts = ref([])
const personal_access_token = ref('')
const payerKey = ref('')
const isLoading = ref(false)
const showModal = ref(false)

// watch helper
watch(accounts, (current, previous) => {
  console.log('wallet connected', current, previous)
  if ((current.length > 0) && (current != previous)) {
    notification.info({
      title: `Wallet connected!`,
      content: `Public Key: ${current[0]}`,
      duration: 8000,
    })
  }
})

// functions
const connectWallet = async () => {
  accounts.value = await window.mina.requestAccounts()
}

const getOracleData = async (personal_access_token) => {
  const response = await fetch('https://zk-oracle-2qz4wkdima-uc.a.run.app/auth', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "personal_access_token": `${personal_access_token}`
    }),
  });
  const data = await response.json();
  console.log('Oracle data', data)
  return data
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const doTheZkProof = async () => {

  isLoading.value = true

  try {

      console.log('compiling')
      const network = Mina.BerkeleyQANet(url)
      Mina.setActiveInstance(network)

      notification.success({
        title: `Connected to Berkeley`,
        duration: 8000,
      })

      // the oracle call and data
      const n1 = notification.info({
        title: `Calling the oracle (Github account check)`,
        avatar: () => h(NSpin, {
          size: "small"
        }),
      })
      const data = await getOracleData(personal_access_token.value)
      const isValidUser = Field(data.data.isValidUser);
      const signature = Signature.fromJSON(data.signature);

      n1.destroy()
      notification.success({
        title: `Finished the oracle call`,
        duration: 8000,
      })

      if (data.data.isValidUser == '0') {
        notification.error({
          title: 'Something is wrong with personal_access_token',
          description: 'Github does not recognise the token provided',
        })
        isLoading.value = false
        return
      }


      const n2 = notification.info({
        title: `Compiling the smart contract. Stay patient.`,
        avatar: () => h(NSpin, {
          size: "small"
        }),
      })

      await sleep(1500)
      const { GithubAccountProof } = await import('./index.js')
      await GithubAccountProof.compile()
      console.log('APP compiled')
      n2.destroy()
      let { account, error } = await fetchAccount({
        publicKey: PublicKey.fromBase58(zkAppAddress)
      });
      const zkApp = new GithubAccountProof(PublicKey.fromBase58(zkAppAddress))

      const accountKeys = await window.mina.requestAccounts()
      console.log('fee payer key: ', accountKeys[0])

      let tx = await Mina.transaction(() => {
        zkApp.verify(isValidUser, signature, PublicKey.fromBase58(accountKeys[0]));
      });
      // console.log(tx.toGraphqlQuery())
      console.log('before prove')
      const n3 = notification.info({
        title: `Creating the zk-proof`,
        avatar: () => h(NSpin, {
          size: "small"
        }),
      })
      await sleep(1500)
      await tx.prove();

      n3.destroy()
      notification.success({
        title: `Proof done! Ready to send the transaction`,
        duration: 16000,
      })
      console.log('send transaction...');
      console.log('TX JSON', tx.toJSON())
      try {
        const { hash } = await window.mina.sendTransaction({
          transaction: tx.toJSON(),
          feePayer: {
            fee: '',
            memo: 'zk-mina-github.vercel.app',
          },
        });
        console.log('TX hash: ', hash)

        if (hash) {
          notification.success({
            title: `Success! Transaction sent.`,
            content: `Your proof will be finished as soon as the transaction is included in a block:\n https://berkeley.minaexplorer.com/transaction/${hash}`
          })
        }
        isLoading.value = false

      } catch (error) {
        console.log(JSON.stringify(error))
      }

  } catch (error) {
    isLoading.value = false
    const n4 = notification.error({
      title: `Something went wrong?`,
      content: JSON.stringify(JSON.stringify(error))
    })
    // n4.destroyAll()
  }

}

</script>

<template>
  <n-space justify="center" id="target-id">
    <n-space vertical>

      <div class="centered-text" style="max-width: 25rem">
        <n-h1>Alright, let's do the proof!</n-h1>
        <n-p>To prove it, you're going to need to go to your Github account and create a temporary <n-badge type="success" value="personal_access_token" :max="15" />.</n-p>
        <n-p>For the sake of security, make sure you only grant the read-access to it, and nothing more. <a @click="showModal = true" style="cursor: pointer;" href="javascript:void(0)">Read more...</a></n-p>
        <!-- <n-p>We'll use this token to prove that you are a valid Github user.</n-p> -->
        <n-p>Follow the <a href="https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank">official Github docs</a> to create one.</n-p>
        <n-p>After you finish the proof, make sure you go to you Github account and <n-text type="warning"> DELETE </n-text> the <n-badge type="success" value="personal_access_token" :max="15" /> you've created and used.</n-p>
      </div>
      <br>

    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <n-input placeholder="personal_access_token" size="large" show-password-on="mousedown" v-model:value="personal_access_token">
          <template #prefix>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z" fill="currentColor"></path></svg>
            </n-icon>
          </template>
        </n-input>
      </template>
      personal_access_token
    </n-tooltip>

    <br>

    <n-space justify="center">
      <n-space vertical>
        <n-button strong secondary type="success" size="large" @click="connectWallet()">
          <template #icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16c0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32s-14.33 32-32 32z" fill="currentColor"></path></svg>
          </template>
          <b>Connect wallet</b>
        </n-button>
        <n-button strong secondary type="success" size="large" :disabled="!(personal_access_token.length && accounts.length)" @click="doTheZkProof()" :loading="isLoading">
          <template #icon>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112c0-8.84-7.16-16-16-16H288z" fill="currentColor"></path></svg>
            </n-icon>
          </template>
          <b>Do the zk proof</b>
        </n-button>
      </n-space>
    </n-space>

    <n-modal v-model:show="showModal">
      <n-card style="max-width: 45em; padding: 20px;" title="How is your personal_access_token going to be used?">
        <n-p><b>1:</b> make sure you assign the least possible rights to the token created. For the app to work, it doesn't need any rights whatsoever. Also delete the token afterwards.</n-p>
        <n-p><b>2:</b> the app will NOT interact with your profile/repositories in any way, except will do a single Github API call that returns user info only.</n-p>
        <n-p><b>3:</b> <a href="https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28" target="_blank">Here's the endpoint</a>, please read about it carefully.</n-p>
        <n-p><b>4:</b> During the proof, the only thing the app will check is if the JSON returned by the API endpoint includes a field "id". That is it.</n-p>
        <n-p><b>5:</b> To learn even more, check and review the <a href="https://github.com/RaidasGrisk/zk-github-oracle" target="_blank">oracle code repository</a>.</n-p>
      </n-card>
    </n-modal>

    </n-space>
  </n-space>

</template>

<style>

.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
