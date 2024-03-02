<script setup>
import { ref, watchEffect } from 'vue';
import { getPlayers } from '../request'

let data = await getPlayers();
const foo = ref([]);

watchEffect(async () => {
  foo.value = await getPlayers()
});

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
      <tr v-for="player in foo">fdg
        <td>{{ player.first_name }} {{ player.last_name }}</td>
        <td>{{ player.college }}</td>
        <td>editar</td>
        <td>remover</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>