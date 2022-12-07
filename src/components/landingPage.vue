<script setup>
import backgroundAnimation from './backgroundAnimation.vue'
</script>

<template>
  <backgroundAnimation />
  <n-space justify="center">
  <n-card style="z-index: 2; max-width:430px; opacity: 0.95; border-radius: 20px; padding: 1rem" :hoverable="'true'">
    <n-space justify="center">

      <n-icon-wrapper :size="64" :border-radius="10">
        <n-icon :size="36">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
            <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6c0-13.8 11.1-24.9 24.9-24.9c13.6 0 24.6 11.1 24.6 24.9c0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256S119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10c-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3l55.4 12.5c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8c-6.1-6.4-14.7-10.2-24.1-10.2c-34.9 0-46.3 46.9-14.4 62.8c-1.1 5-1.7 10.2-1.7 15.5c0 52.6 59.2 95.2 132 95.2c73.1 0 132.3-42.6 132.3-95.2c0-5.3-.6-10.8-1.9-15.8c31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0c-2.2-2.2-6.1-2.2-8.3 0c-2.5 2.5-2.5 6.4 0 8.6c22.8 22.8 87.3 22.8 110.2 0c2.5-2.2 2.5-6.1 0-8.6c-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9c0 13.6 11.1 24.6 24.6 24.6c13.8 0 24.9-11.1 24.9-24.6c0-13.8-11-24.9-24.9-24.9z" fill="currentColor">
            </path>
          </svg>
        </n-icon>
      </n-icon-wrapper>
      <n-icon-wrapper :size="64" :border-radius="10">
        <n-icon :size="36">
          <n-image
            width="36"
            src="https://clor.io/index_files/61b8f5b4d178ba24481c5034_mina-transparent.png"
          />
        </n-icon>
      </n-icon-wrapper>
    </n-space>
    <n-divider style="width: 20%; display: block; margin-left: auto; margin-right: auto; text-align: center;"/>
    <n-h1 style="margin: 0px;">Reddit account proof on</n-h1>
    <n-h1 style="margin: 0px;"><b>MINA</b></n-h1>
    <n-divider style="width: 40%; display: block; margin-left: auto; margin-right: auto; text-align: center;"/>
    <n-badge :max="15" type="info">
      zk proof that mina account is owned by reddit user
    </n-badge>
    <br>
    <br>
    <n-badge :value="'zero-knowledge app'" :max="15" type="info"/>
  </n-card>
  </n-space>
  <br><br>
  <n-button strong secondary type="success" style="z-index: 2; transform: scale(1.8);" size="large">
    <template #icon>
      <n-icon>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M505.12 19.094c-1.19-5.532-6.658-11-12.207-12.188C460.716 0 435.507 0 410.407 0C307.175 0 245.27 55.203 199.052 128H94.838c-16.348.016-35.557 11.875-42.887 26.484L2.516 253.297A28.4 28.4 0 0 0 0 264a24.009 24.009 0 0 0 24.006 24h103.81l-22.474 22.469c-11.366 11.361-12.996 32.258 0 45.25l50.904 50.906c11.156 11.188 32.156 13.156 45.277 0l22.475-22.469V488a24.009 24.009 0 0 0 24.005 24a28.56 28.56 0 0 0 10.707-2.516l98.729-49.39c14.629-7.297 26.508-26.5 26.508-42.86V312.797C456.544 266.484 511.98 204.39 511.98 101.703c.094-25.203.094-50.406-6.86-82.61zM384.04 168a40 40 0 1 1 40.01-40a40.023 40.023 0 0 1-40.01 40z" fill="currentColor"></path></svg>
      </n-icon>
    </template>
    <b>Load the zk-app</b>
  </n-button>

</template>

<style>
</style>
