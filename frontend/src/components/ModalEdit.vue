<script setup lang="ts">
  import { 
    editPlayer, 
    updateTable 
  } from '../services';
  import { currentPlayer, formState } from '../state';
  import Form from './Form.vue';
  import Modal from './Modal.vue';

  function confirmUpdate(){
    if (!formState) {
      return;
    }
        
    editPlayer(currentPlayer.value.id, formState.value);
    updateTable();
  }
</script>
<template>
    <Modal @confirm="confirmUpdate">
      <p class="text-xl font-medium">Edit Player Information</p>
      <Form :player="currentPlayer"/>
    </Modal>
</template>