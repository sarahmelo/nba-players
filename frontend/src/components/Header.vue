<script setup lang="ts">
  import { playerList, playerListFiltered } from '../state';
  import Search from './Search.vue';

  function handleSearchPlayer(value: string) {
    playerListFiltered.value = playerList.value?.filter(({ first_name, last_name }) => {
      const didMatch = [first_name, last_name].reduce(
        (prevResult, current) => 
          prevResult || current.toLowerCase().substr(0, value.toLowerCase().length) === value.toLowerCase(),
          false
        );

        return didMatch;
    })
  }
</script>
<template>
    <header class="flex justify-between p-4 fixed z-10 bg-white w-lvw top-0 shadow-sm">
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
        <div class="search relative md:absolute md:left-[50%] md:translate-x-[-50%] md:bottom-[10px]">
          <Search
            :placeholder="'Seach players'"
            @emit-value="handleSearchPlayer"
          />
        </div>
    </header>
</template>../state