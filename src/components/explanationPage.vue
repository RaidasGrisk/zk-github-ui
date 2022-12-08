<script setup>

</script>

<template>
  <n-space justify="center">
    <n-space vertical>
      <n-h1>Lets overview <br>how the proof is created</n-h1>
      <n-card style="max-width:430px; text-align: justify;">

        <n-list hoverable clickable>
          <n-list-item style="margin: 2em;">
            <n-thing title="The credentials are send over to the oracle.">
              The oracle uses reddit API to tries to login with the credentials provided.
              The oracle returns true if it succeeds and false if it fails, together with
              a cryptographic proof, that this was dony by the oracle, not anyone/someone else.
            </n-thing>
          </n-list-item>
          <n-list-item style="margin: 2em;">
            <n-thing title="Provide the oracle response to the smart conrtact">
              The smart contract verifies the response using the cryptographic proof and if all is fine, finishes the transaction.
              <br><br>
              The only way to finish and record the transaction on chain is if all the steps above are finished successfully.
              Else, the transaction will fail.
            </n-thing>
          </n-list-item>
        </n-list>
    </n-card>
    </n-space>
  </n-space>
</template>

<style>
</style>
