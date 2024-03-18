<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import { formState, modalState, playerList, teams } from '../state';
  import { getTeams, updateTable } from '../services';
  import ModalDelete from '../components/ModalDelete.vue';
  import ModalEdit from '../components/ModalEdit.vue';
  import Table from '../components/Table.vue';
  
  const currentPlayer = ref<Player>({ } as Player)

  function editPlayer(player: Player) {
    setCurrentPlayer(player);
    formState.value = {
      first_name: currentPlayer.value.first_name,
      last_name: currentPlayer.value.last_name,
      jersey_number: currentPlayer.value.jersey_number,
      position: currentPlayer.value.position,
      college: currentPlayer.value.college,
      country: currentPlayer.value.country,
      draft_number: currentPlayer.value.draft_number,
      draft_round: currentPlayer.value.draft_round,
      draft_year: currentPlayer.value.draft_year,
      height: currentPlayer.value.height,
      id: currentPlayer.value.id,
      weight: currentPlayer.value.weight,
      team_id:currentPlayer.value.team.id,
    }
  }

  function setCurrentPlayer(player: Player) {
    currentPlayer.value = player;
  }

  watchEffect(async () => {
    updateTable();
    teams.value = await getTeams();
  });
</script>

<template>
  <div class="w-full flex flex-col items-start px-8 gap-4">
    <h3 class="text-xl mb-2"><strong>Basketball</strong> Table Players</h3>
    <p class="text-sm" v-if="!playerList">
      Uploading informations of players...
    </p>
      <Table 
        @on-edit="editPlayer" 
        @on-remove="setCurrentPlayer"
      />
      <ModalDelete 
        v-if="modalState === 'delete'" 
        :player="currentPlayer"
      />
      <ModalEdit
        v-if="modalState === 'edit'" 
        :player="currentPlayer" 
      />
  </div>
</template>
<style>
</style>