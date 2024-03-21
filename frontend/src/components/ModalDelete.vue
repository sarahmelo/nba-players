<script setup lang="ts">
  import { currentPlayer, modalState } from '../state';
  import { 
    deletePlayer, 
    updateTable   
  } from '../services';
  import Modal from './Modal.vue';

  function isModalDeleteActive() {
    return modalState.value === 'delete'
  }

  function deletePlayerOnTable() {
    modalState.value = 'off'
    deletePlayer(currentPlayer.value.id)
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
      <li><strong>Name:</strong> {{ currentPlayer?.first_name }} {{ currentPlayer?.last_name }}</li>
      <li><strong>Team:</strong> {{ currentPlayer?.team.full_name }}</li>
      <li><strong>Position:</strong> {{ currentPlayer?.position }}</li>
    </ul>
  </Modal>
</template>