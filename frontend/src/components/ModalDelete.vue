<script setup lang="ts">
  import { PropType } from 'vue';
  import { modalState } from '../state';
  import { 
    deletePlayer, 
    updateTable   
  } from '../services';
  import Modal from './Modal.vue';
  
  const { player } = defineProps({
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  });

  function isModalDeleteActive() {
    return modalState.value === 'delete'
  }

  function deletePlayerOnTable() {
    modalState.value = 'off'
    deletePlayer(player.id)
    updateTable()
  }
</script>
<template>
  <Modal 
    v-if="isModalDeleteActive()" 
    @confirm="deletePlayerOnTable"
  >
    <p class="text-xl font-medium">Remove Player</p>
    <p class="text-base">Do you really want to delete this player?</p>
    <ul>
      <li><strong>Name:</strong> {{ player?.first_name }} {{ player?.last_name }}</li>
      <li><strong>Team:</strong> {{ player?.team.full_name }}</li>
      <li><strong>Position:</strong> {{ player?.position }}</li>
    </ul>
  </Modal>
</template>