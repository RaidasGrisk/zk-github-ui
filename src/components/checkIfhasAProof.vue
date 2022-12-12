<script setup>
import { ref } from 'vue'
import axios from 'axios'

// constants
const url = 'https://berkeley.graphql.minaexplorer.com/'
const zkAppAddress = 'B62qmQfEB46A4n9xhX9wnQo3PcA32LRxuLongzpsahL2gFHXxC9yRuh'

// refs
const data = ref([])
const publicKey = ref('')
const isLoading = ref(false)
const afterCheck = ref(false)
const showModal = ref(false)


const checkAddress = async (zkAppAddress, publicKey) => {
  isLoading.value = true
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        zkapps(query: {zkappCommand: {feePayer: {body: {publicKey: \"${publicKey}"\}}, accountUpdates: {body: {publicKey: \"${zkAppAddress}"\}}}}) {
          hash
          blockHeight
          dateTime
        }
      }

        `
    }),
  })
  const response_ = await response.json()
  data.value = response_
  isLoading.value = false
  afterCheck.value = true
}

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <div class="centered-text" style="max-width: 25rem">
        <n-h1>Check if account provided a proof 🧐</n-h1>
      </div>

      <n-tooltip trigger="hover" placement="left">
        <template #trigger>
          <n-input placeholder="public key" style="max-width: 25rem;" size="large" v-model:value="publicKey">
            <template #prefix>
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z" fill="currentColor"></path></svg>
              </n-icon>
            </template>
          </n-input>
        </template>
        public key
      </n-tooltip>

      <n-space justify="center">
      <n-button strong secondary type="success" size="large" :disabled="!publicKey" @click="checkAddress(zkAppAddress, publicKey)" :loading="isLoading">
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7L80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" fill="currentColor"></path></svg>
          </n-icon>
        </template>
        <b>Check</b>
      </n-button>
      </n-space>

      <div v-if="(!isLoading && afterCheck)">
        <n-space justify="center">
        <n-space vertical class="centered-text">
        <n-icon-wrapper :size="46" :border-radius="10" v-if="data.data.zkapps.at(-1)">
          <n-icon :size="28">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" fill="currentColor"></path></svg>
          </n-icon>
        </n-icon-wrapper>

        <n-icon-wrapper :size="46" :border-radius="10" v-else>
          <n-icon :size="28">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <defs></defs>
              <path d="M 416 208 L 272 208 L 272 64 C 272 46.33 257.67 32 240 32 L 208 32 C 190.33 32 176 46.33 176 64 L 176 208 L 32 208 C 14.33 208 0 222.33 0 240 L 0 272 C 0 289.67 14.33 304 32 304 L 176 304 L 176 448 C 176 465.67 190.33 480 208 480 L 240 480 C 257.67 480 272 465.67 272 448 L 272 304 L 416 304 C 433.67 304 448 289.67 448 272 L 448 240 C 448 222.33 433.67 208 416 208 Z" fill="currentColor" transform="matrix(0.707107, 0.707107, -0.707107, 0.707107, 246.627303, -83.411263)"></path>
            </svg>
          </n-icon>
        </n-icon-wrapper>

        <n-button @click="showModal = true" v-if="data.data.zkapps.at(-1)">
          Proof details
        </n-button>
      </n-space>
      </n-space>
      </div>

      <n-modal v-model:show="showModal">
        <n-card style="max-width: 25em;"
        >
        {{ data.data.zkapps.reduce((proof, block) => proof.blockHeight > block.blockHeight ? proof : block) }}
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
