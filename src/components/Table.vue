<script setup lang="ts">
import { playerList } from '../api';

export interface IPlayer {
  first_name: string;
  last_name: string;
  college: string;
  country: string;
}

</script>
<template>
  <table class="table-auto border-1 w-full max-w-[60rem]">
    <thead class="border-solid border border-indigo-400">
      <tr>
        <th class="bg-indigo-100 p-2">Name</th>
        <th class="bg-indigo-100 p-2">College</th>
        <th class="bg-indigo-100 p-2">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in playerList">
        <td class="min-w-[16rem]">{{ player.first_name }} {{ player.last_name }}</td>
        <td class="min-w-[16rem]">{{ player.college }}</td>
        <td class="min-w-[16rem]">{{ player.country }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>