<script setup>
  import { watchEffect } from 'vue';
  import Header from './components/Header.vue';
  import { getPlayers } from './services';
  import { playerList } from './state';
</script>
<template>
  <Header/>
  <main class="flex flex-col gap-4 items-center justify-center m-4 mb-12 pt-28">
    <router-view></router-view>
  </main>
</template>
<style scoped>
main {
  width: min(calc(100vw - 2rem), 68.7rem);
}
</style>