<script setup lang="ts">
import { useRouter } from 'vue-router';
import { playerList } from '../api';
import { router } from '../main';

export interface IPlayer {
  first_name: string;
  last_name: string;
  college: string;
  country: string;
  id: number;
}

function navigateEditPlayer(playerId: number) {
  router.push({
    name: 'profile',
    params: {
      id: playerId
    }
  })
}

</script>
<template class="w-full ">
  <table class="grid max-w-[50rem] overflow-auto border rounded border-blue-800 p-4 border-spacing-2 border-separate">
    <thead>
      <tr class="flex w-max">
        <th class="bg-blue-200 py-2 md:indent-8 w-[19rem] text-start">Name</th>
        <th class="bg-blue-200 py-2 md:indent-8 w-[17rem] text-start">College</th>
        <th class="bg-blue-200 py-2 md:indent-8 w-[18rem] text-start">Country</th>
        <th class="bg-gray-800 py-2 w-[12rem]"></th>
      </tr>
    </thead>
    <tbody class="gap-2 block overflow-auto w-auto">
      <tr v-for="player in playerList">
        <td>
          {{ player.first_name }} {{ player.last_name }}
        </td>
        <td >{{ player.college }}</td>
        <td >{{ player.country }}</td>
        <td >
          <button
            @click="navigateEditPlayer(player.id)"
            class="rounded mr-4 bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
          >
            Editar
          </button>
          <button
            class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
          >
            Excluir
          </button>
          <button>
            
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style>
table {
  width: calc(100vw - 40px);
}
</style>