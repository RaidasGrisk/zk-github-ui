<script setup>

</script>

<template>
  <n-space justify="center">
    <n-space vertical>

      <div class="centered-text" style="max-width: 25rem">
        <n-h1>Alright, let's do the proof!</n-h1>
        <n-p>To prove it, you're going to need to go to your Github account and create a temporary <n-badge type="success" value="personal_access_token" :max="15" />.</n-p>
        <!-- <n-p>We'll use this token to prove that you are a valid Github user.</n-p> -->
        <n-p>Follow the <a href="https://docs.github.com/en/enterprise-server@3.4/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank">official Github docs</a> to create one.</n-p>
        <n-p>After you finish this, make sure you <n-text type="warning"> DELETE </n-text> the <n-badge type="success" value="personal_access_token" :max="15" /> we've created and used.</n-p>
      </div>
      <br>

    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <n-input placeholder="personal_access_token" size="large" show-password-on="mousedown">
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

.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
