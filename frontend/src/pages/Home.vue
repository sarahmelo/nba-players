<script setup lang="ts">
  import Table from '../components/table/Table.vue';
  import { playerList } from '../state';
</script>

<template>
  <div class="flex flex-col items-start px-8 gap-4">
    <h3 class="text-xl mb-2"><strong>Basketball</strong> Table Players</h3>
    <p class="text-sm" v-if="!playerList">
      Uploading informations of players...
    </p>
    <div class="table-container w-fit shadow-md">
      <Table/>
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
</style>../state