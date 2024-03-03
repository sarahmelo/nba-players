<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { getPlayers } from '../request'
import { playersAPI } from '../api';

const appState = reactive({
  playersList: Array
})
let inputValue = '';

watchEffect(async () => {
  playersAPI.value = await getPlayers()
});

function handleSort(isAscending) {
  playersAPI.value.sort((player1, player2) => {
    return isAscending 
      ? player1.first_name > player2.first_name
      : player1.first_name < player2.first_name
  })
}

function handleSearchPlayer() {
  const value = inputValue.toLowerCase();

  appState.playersList = playersAPI.value.filter(({ first_name, last_name }) => {
    const didMatch = [first_name, last_name].reduce(
      (prevResult, current) => prevResult || current.toLowerCase().substr(0, value.length) === value,
      false,
    )

    return didMatch;
  })
}

</script>
<template>
  <table class="table-auto border-1">
    <thead>
      <tr>
        <th>Name</th>
        <th>College</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="player in playersAPI">
        <td>{{ player.first_name }} {{ player.last_name }}</td>
        <td>{{ player.college }}</td>
        <td>{{ player.country }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="handleSort(true)">[A-Z]</button>
  <button @click="handleSort(false)">[Z-A]</button>
  <input type="search" placeholder="buscar jogador" v-model="inputValue" @change="handleSearchPlayer">
</template>
<style></style>