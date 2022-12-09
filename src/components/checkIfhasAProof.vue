<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const data = ref([])
onMounted( async () => {

  // // config
  // const url = 'https://berkeley.graphql.minaexplorer.com/'
  // const publicKey = 'B62qmQfEB46A4n9xhX9wnQo3PcA32LRxuLongzpsahL2gFHXxC9yRuh'
  //
  // // API request
  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     query: `
  //     query MyQuery {
  //       zkapps(query: {zkappCommand: {accountUpdates: {body: {publicKey: \"${publicKey}"\}}}}) {
  //         hash
  //         blockHeight
  //         dateTime
  //         zkappCommand {
  //           feePayer {
  //             body {
  //               publicKey
  //             }
  //           }
  //         }
  //       }
  //     }
  //
  //       `
  //   }),
  // })
  // const response_ = await response.json()
  // data.value = uniqueArray
})

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <n-h2>Check if account provided a proof:</n-h2>

      <n-tooltip trigger="hover" placement="left">
        <template #trigger>
          <n-input placeholder="public key" style="max-width: 25rem;" size="large" loading>
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
      <n-button strong secondary type="success" size="large" loading>
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7L80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" fill="currentColor"></path></svg>
          </n-icon>
        </template>
        <b>Check</b>
      </n-button>
      </n-space>


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
