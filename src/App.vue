<script setup>
import landingPage from './components/landingPage.vue'
import transactionPage from './components/transactionPage.vue'
import dataTable from './components/dataTable.vue'
import checkIfhasAProof from './components/checkIfhasAProof.vue'
import footer_ from './components/footer_.vue'

</script>

<template>
  <n-config-provider>
    <n-notification-provider>
      <n-layout>
        <n-layout>
          <n-layout-header style="padding: 16rem 0rem 16rem 0rem;" class="centered-text" bordered>
            <landingPage />
          </n-layout-header>
          <n-layout-content>
            <transactionPage style="padding: 4rem 0rem 4rem 0rem;"/>
            <n-divider />
            <checkIfhasAProof style="padding: 4rem 0rem 4rem 0rem;" />
            <n-divider />
            <dataTable class="centered-text" style="padding: 6rem 0rem 6rem 0rem;" />
          </n-layout-content>
          <n-layout-footer style="padding: 4rem 1rem 4rem 1rem;" bordered>
            <footer_ />
          </n-layout-footer>
        </n-layout>
      </n-layout>
    </n-notification-provider>
  </n-config-provider>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

#app {
  font-family: 'Roboto', sans-serif;
}

.centered-text {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

</style>
