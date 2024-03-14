<script setup>
  import { playerList, playersAPI } from '../api';
  import Search from './Search.vue';
  import { router } from '../main';

  function handleSearchPlayer(value) {
    playerList.value = playersAPI.value?.filter(({ first_name, last_name }) => {
      const didMatch = [first_name, last_name].reduce(
        (prevResult, current) => 
          prevResult || current.toLowerCase().substr(0, value.toLowerCase().length) === value.toLowerCase(),
          false
        );

        return didMatch;
    })
  }

  function isHomePage() {
    return router.currentRoute.value.path === '/';
  }
</script>
<template>
    <header class="flex justify-between p-4 px-8 fixed z-10 bg-white w-lvw top-0 shadow-sm">
        <div class="flex items-center">
            <img 
              class="h-8" 
              src="../../public/assets/nba_logo.png" 
              alt="man with ball of basket in your right hands"
            >
            <router-link :to="{ name: 'home'}">
              <h1 class="text-sm font-semibold uppercase">
                NBA Player
              </h1>
            </router-link>
        </div>
        <div
          v-if="isHomePage()"
          class="search relative md:absolute md:left-[50%] md:translate-x-[-50%] md:bottom-[10px]"
        >
          <Search
            :placeholder="'Seach players'"
            @emit-value="handleSearchPlayer"
          />
        </div>
    </header>
</template>