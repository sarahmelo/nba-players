<script setup lang="ts">
  import { Suspense, computed, ref, watchEffect } from 'vue';
  import Table from '../components/Table.vue';
  import { playerList, playersAPI } from '../api';
  import ButtonFilter from '../components/ButtonFilter.vue';
  import { fillDataBasePlayer, getPlayers } from '../request';
  import Search from '../components/Search.vue'
  import Button from 'primevue/button';

  const isAscending = ref(true);

  watchEffect(async () => {
    const tst = await getPlayers()
    playersAPI.value = tst
    playerList.value = playersAPI.value;
    
    await fillDataBasePlayer(tst)
  });

  function handleSearch(value: string) {
    playerList.value = playersAPI.value?.filter(({ first_name, last_name }) => {
      const didMatch = [first_name, last_name].reduce(
        (prevResult, current) => prevResult || current.toLowerCase().substr(0, value.toLowerCase().length) === value.toLowerCase(),
        false,
      )
        return didMatch;
      })
  }

  function handleResetSearch() {
    playerList.value = playersAPI.value;
  }
</script>

<template>
    <div class="flex flex-col items-center px-8 gap-4">
      <div class="table-container w-fit">
        <Suspense>
          <Table></Table>
          <template #fallback>
            <h1 class="text-3xl font-bold underline">Loading players...</h1>
          </template>
        </Suspense>
      </div>
    </div>
</template>
<style>
.table-container {
  width: min(calc(100vw - 4rem), 68.7rem);
}
</style>