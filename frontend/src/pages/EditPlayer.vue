<script setup>
  import { ref, watchEffect } from 'vue';
  import { router } from '../routes';
  import { getPlayerDetails } from '../services';
  import Form from '../components/Form.vue';

  const player = ref({});
  const id = ref()

  watchEffect(async () => {
    id.value = Number(router.currentRoute.value.params.id);
    
    player.value = await getPlayerDetails(id.value);
  })
</script>
<template>
    <Form :player="player" :playerId="id" />
</template>
<style>
  .form-container {
    width: min(calc(100vh - 2rem), 40rem);
  }
</style>