<script setup>
// import landingPage from './components/landingPage.vue'
import transactionPage from './components/transactionPage.vue'
import explanationPage from './components/explanationPage.vue'
import issuesSuggestionsPage from './components/issuesSuggestionsPage.vue'
import dataTable from './components/dataTable.vue'
import checkIfhasAProof from './components/checkIfhasAProof.vue'


</script>

<template>
  <n-config-provider>
    <n-notification-provider>
      <n-layout>
        <n-layout>
          <n-layout-header style="padding: 16rem 0rem 16rem 0rem;" class="background centered-text" bordered>
            <!-- <landingPage /> -->
          </n-layout-header>
          <n-layout-content>
            <transactionPage style="padding: 8rem 0rem 8rem 0rem;"/>
            <n-divider />
            <checkIfhasAProof style="padding: 8rem 0rem 8rem 0rem;" />
            <n-divider />
            <explanationPage class="centered-text"/>
            <n-divider />
            <dataTable class="centered-text"/>
            <n-divider />
            <issuesSuggestionsPage />
          </n-layout-content>
          <n-layout-footer style="padding: 2rem;" bordered>
            Chengfu Road
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
