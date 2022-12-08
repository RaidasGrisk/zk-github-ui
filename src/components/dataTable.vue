<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref([])
const columns = ref([
  {
    title: 'blockHeight',
    key: 'blockHeight'
  },
  {
    title: 'dateTime',
    key: 'dateTime'
  },
  {
    title: 'hash',
    key: 'hash'
  },
  {
    title: 'publickKey',
    key: 'zkappCommand.feePayer.body.publicKey'
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


  data.value = uniqueArray
})

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <n-h1>Here's all the accounts <br> that provided a proof:</n-h1>
      <br>
      <n-spin size="large" v-if="data.length == 0"/>
      <n-data-table
        style='max-width: 50rem;'
        :columns="columns"
        :data="data"
        :bordered="true"
      />
      <br>
      <n-h1>Check if account provided a proof:</n-h1>

      <n-input placeholder="public key" style="max-width: 25rem;">
        <template #prefix>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176C160 78.798 238.797.001 335.999 0C433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48s-21.49-48-48-48s-48 21.49-48 48z" fill="currentColor"></path></svg>
        </template>
      </n-input>

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
