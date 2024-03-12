<script setup>
  import Header from './components/Header.vue';
</script>
<template>
  <Header/>
  <main class="flex items-center justify-center m-4 mb-12 pt-28">
    <router-view></router-view>
  </main>
</template>