<script setup lang="ts">
  import { ref, watchEffect } from 'vue';
  import Table from '../components/table/Table.vue';
  import { formState, modalState, playerList, playerListFiltered } from '../state';
  import { getPlayers } from '../services';
  import ModalDelete from '../components/ModalDelete.vue';
  import ModalEdit from '../components/ModalEdit.vue';
  
  const currentPlayer = ref<IPlayer>({ } as IPlayer)

  function editPlayer(player: IPlayer) {
    currentPlayer.value = player;
    formState.value = {
      first_name: currentPlayer.value.first_name,
      last_name: currentPlayer.value.last_name,
      jersey_number: currentPlayer.value.jersey_number,
      position: currentPlayer.value.position,
    }
  }

  function removePlayer(player: IPlayer) {
    currentPlayer.value = player;
  }

  watchEffect(async () => {
    playerList.value = await getPlayers()
    playerListFiltered.value = playerList.value
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
        @on-remove="removePlayer"
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