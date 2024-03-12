<script setup>
import { playerList, playersAPI } from '../api';
import Search from './Search.vue';

  function handleSearch(value) {
    playerList.value = playersAPI.value?.filter(({ first_name, last_name }) => {
      const didMatch = [first_name, last_name].reduce(
        (prevResult, current) => prevResult || current.toLowerCase().substr(0, value.toLowerCase().length) === value.toLowerCase(),
        false,
      )
        return didMatch;
      })
  }
</script>
<template>
    <header class="flex p-4 fixed z-10 bg-white w-lvw top-0 shadow-sm">
        <div class="flex items-center">
            <img class="h-8" src="../../public/assets/nba_logo.png" alt="">
            <h1 class="text-sm font-semibold uppercase">NBA Player</h1>
        </div>
        <div></div>
        <Search
          :placeholder="'Seach players'"
          @emit-value="handleSearch"
        />
        <div></div>
    </header>
</template>
<style></style>