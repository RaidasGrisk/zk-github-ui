<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref([])
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
      return publicKey_
    }
  },
  {
    title: 'hash',
    key: 'hash',
    render(row) {
      let row_ = row['hash']
      let hash_ = row_.slice(0, 5) + ' ... ' + row_.slice(row_.length - 5)
      return hash_
    }
  },

])
onMounted( async () => {

  // config
  const url = 'https://berkeley.graphql.minaexplorer.com/'
  const publicKey = 'B62qmQfEB46A4n9xhX9wnQo3PcA32LRxuLongzpsahL2gFHXxC9yRuh'

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

  // filter duplicates
  const uniqueArray = response_.data.zkapps.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === response_.data.zkapps.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });


  data.value = uniqueArray.reverse().slice(0, 10);
})

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <n-h1>Latest proofs 📜</n-h1>
      <br>
      <n-spin size="large" v-if="data.length == 0"/>
      <n-data-table
        style='max-width: 50rem;'
        :columns="columns"
        :data="data"
        :bordered="true"
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
