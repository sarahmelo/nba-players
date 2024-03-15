<script setup>
  import { watchEffect } from 'vue';
  import Header from './components/Header.vue';
  import { getPlayers } from './services';
  import { playerList } from './state';

  watchEffect(async () => {
    playerList.value = await getPlayers()
  });
</script>
<template>
  <Header/>
  <main class="flex items-center justify-center m-4 mb-12 pt-28">
    <router-view></router-view>
  </main>
</template>./state