<script setup>
import { NText } from 'naive-ui'
import { ref, onMounted, h } from 'vue'
import axios from 'axios'

const isLoading = ref(false)
const numberAnimationInstRef1 = ref(null)
const numberAnimationInstRef2 = ref(null)
const data = ref([]) // raw data
const data_ = ref([]) // data for table
const columns = ref([
  {
    title: 'Block',
    key: 'blockHeight'
  },
  {
    title: 'Date',
    key: 'dateTime'
  },
  {
    title: 'publickKey',
    key: 'zkappCommand.feePayer.body.publicKey',
    render(row) {
      let row_ = row.zkappCommand.feePayer.body.publicKey
      let publicKey_ = row_.slice(0, 5) + ' ... ' + row_.slice(row_.length - 5)
      return h(
        'a', {
          href: `https://berkeley.minaexplorer.com/wallet/${row_}`,
          target: '_blank'
        }, publicKey_
      )
    }
  },
  {
    title: 'hash',
    key: 'hash',
    render(row) {
      let row_ = row['hash']
      let hash_ = row_.slice(0, 5) + ' ... ' + row_.slice(row_.length - 5)
      return h(
        'a', {
          href: `https://berkeley.minaexplorer.com/transaction/${row['hash']}`,
          target: '_blank'
        }, hash_
      )
    }
  },
])

const getData = async () => {

  isLoading.value = true

  // config
  const url = 'https://berkeley.graphql.minaexplorer.com/'
  const publicKey = 'B62qq1tktxLsPAvL3QytnyqMCnUvn9NrUuXGJgPGAhQUacdKzupE2Kp'

  // API request
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        zkapps(query: {zkappCommand: {accountUpdates: {body: {publicKey: \"${publicKey}"\}}}}) {
          hash
          blockHeight
          dateTime
          zkappCommand {
            feePayer {
              body {
                publicKey
              }
            }
          }
        }
      }

        `
    }),
  })
  const response_ = await response.json()

  isLoading.value = false

  // filter duplicates
  const uniqueArray = response_.data.zkapps.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === response_.data.zkapps.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });

  // set data variable value
  data.value = uniqueArray
  data_.value = uniqueArray.reverse().slice(0, 10)

  // play the animation
  numberAnimationInstRef1.value.play()
  numberAnimationInstRef2.value.play()
}

onMounted( async () => {
  getData()
})

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <n-h1>Latest proofs 📜</n-h1>
      <n-button tertiary type="primary" @click="getData()" :loading="isLoading">
        Refresh
      </n-button>
      <br>
      <n-space justify="center" horizontal>
        <n-statistic label="Total number of proofs" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef1"
            show-separator
            :from="0"
            :to="data.length"
            :active="true"
          />
        </n-statistic>
        <n-statistic label="Unique addresses" tabular-nums>
          <n-number-animation
            ref="numberAnimationInstRef2"
            show-separator
            :from="0"
            :to="new Set(data.map(a => a.zkappCommand.feePayer.body.publicKey)).size"
            :active="true"
          />
        </n-statistic>
      </n-space>
      <br>
      <n-data-table
        style='max-width: 50rem;'
        :columns="columns"
        :data="data_"
        :bordered="true"
        :loading="isLoading"
      />
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
