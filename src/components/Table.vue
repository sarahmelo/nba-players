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
<template class="w-full">
  <table class="border rounded border-blue-800 block p-4">
    <thead>
      <tr >
        <th class="bg-gray-800 p-2 w-[12rem]"></th>
        <th class="bg-blue-200 p-2 w-[19rem]">Name</th>
        <th class="bg-blue-200 p-2 w-[17rem]">College</th>
        <th class="bg-blue-200 p-2 w-[18rem]">Country</th>
      </tr>
    </thead>
    <tbody class="flex flex-col gap-2 max-h-[34rem] w-full overflow-auto mt-4">
      <tr v-for="player in playerList" class="flex gap-4">
        <th class="flex gap-4">
            <button
              @click="navigateEditPlayer(player.id)"
              class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
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
        </th>
        <td class="min-w-[16rem] flex gap-4">
          {{ player.first_name }} {{ player.last_name }}
      </td>
        <td class="min-w-[16rem]">{{ player.college }}</td>
        <td class="min-w-[16rem]">{{ player.country }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>