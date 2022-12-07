<script setup>

</script>

<template>
  <n-space justify="center">
    <n-space vertical>

      <n-tooltip trigger="hover" placement="left">
        <template #trigger>
          <n-input placeholder="username" size="large" >
            <template #prefix>
              <n-icon>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" fill="currentColor"></path></svg>
              </n-icon>
            </template>
          </n-input>
        </template>
        reddit login username
      </n-tooltip>

    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <n-input placeholder="password" size="large" type="password" show-password-on="mousedown">
          <template #prefix>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7c0-13.3-27.3-25.1-70.1-33c-9.2-32.8-27-65.8-40.6-82.8c-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8c-13.5 17-31.4 50-40.6 82.8c-42.7 7.9-70 19.7-70 33c0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192l49.6 32l24 40l-32 120zm96 0l-32-120l24-40l49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4c-10.1 9.3-48 22.4-64-25c-2.8-8.4-15.4-8.4-18.3 0c-17 50.2-56 32.4-64 25c-9.5-8.8-12.7-21.5-16.5-33.4c-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z" fill="currentColor"></path></svg>
            </n-icon>
          </template>
        </n-input>
      </template>
      reddit login password
    </n-tooltip>

    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <n-input placeholder="clientid" size="large" type="password" show-password-on="mousedown">
          <template #prefix>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5c-6.7-21.6-18.2-41.2-33.2-57.4c-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1c-22.3-5-45-4.8-66.2 0c-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4c-15 16.2-26.5 35.8-33.2 57.4c-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5c6.7 21.6 18.2 41.1 33.2 57.4c2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1c22.3 5 45 4.8 66.2 0c3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4c15-16.2 26.5-35.8 33.2-57.4c1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5s48.5 21.8 48.5 48.5s-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3c-10.9 0-21.4-4.6-28.9-12.6c-18.3-19.8-32.3-43.9-40.2-69.6c-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7c.9-2.9 2.2-5.8 3.2-8.7c-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5c-1.2-3.8-2-7.7-2-11.8v-9.2z" fill="currentColor"></path></svg>
            </n-icon>
          </template>
        </n-input>
      </template>
      reddit app client id
    </n-tooltip>

    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <n-input placeholder="clientsecret" size="large" type="password" show-password-on="mousedown">
          <template #prefix>
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32a32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z" fill="currentColor"></path></svg>
            </n-icon>
          </template>
        </n-input>
      </template>
      reddit app client secret
    </n-tooltip>

    <n-space justify="center">
    <n-button strong secondary type="success" size="large">
      <template #icon>
        <n-icon>
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512"><path d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112c0-8.84-7.16-16-16-16H288z" fill="currentColor"></path></svg>
        </n-icon>
      </template>
      <b>Do the zk proof</b>
    </n-button>
    </n-space>

    </n-space>
  </n-space>

</template>

<style>
</style>
