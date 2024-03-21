<script setup lang="ts">
  import { 
    editPlayer, 
    updateTable 
  } from '../services';
  import { formState } from '../state';
  import Form from './Form.vue';
  import Modal from './Modal.vue';
  import { PropType } from 'vue';

  const { player } = defineProps({
    player: {
      type: Object as PropType<Player>,
      required: true,
    },
  })


  function confirmUpdate(){
    if (!formState) {
      return;
    }
    
    editPlayer(player.id, formState.value);
    updateTable();
  }
</script>
<template>
    <Modal @confirm="confirmUpdate">
      <p class="text-xl font-medium">Edit Player Information</p>
      <Form :player="player"/>
    </Modal>
</template>