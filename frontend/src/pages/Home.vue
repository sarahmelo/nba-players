<script setup lang="ts">
  import { watchEffect } from 'vue';
  import Table from '../components/Table.vue';
  import { playerList, playersAPI } from '../api';
  import { fillDataBasePlayer, getPlayers } from '../request';

  watchEffect(async () => {
    const tst = await getPlayers()
    playersAPI.value = tst
    playerList.value = playersAPI.value;
    
    await fillDataBasePlayer(tst)
  });
  
  function isLoadingPlayersData() {
    return !playerList.value
  }
</script>

<template>
    <div class="flex flex-col items-start px-8 gap-4">
      <h3 class="text-xl mb-2"><strong>Basketball</strong> Table Players</h3>
      <p class="text-sm" v-if="isLoadingPlayersData()">
          Baixando informações dos jogadores...
      </p>
      <div class="table-container w-fit shadow-md">
        <div>
          <Table></Table>
        </div>
      </div>
    </div>
</template>
<style>
.table-container {
  width: min(calc(100vw - 2rem), 68.7rem);
  height: 100%;
  max-height: calc(100vh - 14.5rem);
  overflow-y: auto;
  overflow-x: auto;
}
</style>