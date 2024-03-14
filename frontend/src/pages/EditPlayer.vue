<script setup>
  import { ref, watchEffect } from 'vue';
  import { getPlayerDetails } from '../request';
  import { router } from '../main';
  import Form from '../components/Form.vue';

  const player = ref({});

  watchEffect(async () => {
    const playerId = router.currentRoute.value.params.id

    player.value = await getPlayerDetails(playerId);
  })
</script>
<template>
  <Form :playerData="player" />
</template>
<style>
  .form-container {
    width: min(calc(100vh - 2rem), 40rem);
  }
</style>