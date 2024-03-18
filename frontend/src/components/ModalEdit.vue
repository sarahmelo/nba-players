<script setup lang="ts">
  import { editPlayer, updateTable } from '../services';
  import { formState } from '../state';
  import Form from './Form.vue';
  import Modal from './Modal.vue';
  import { PropType } from 'vue';

  const { player } = defineProps({
    player: {
      type: Object as PropType<Player>,
      required: true,
    }
  })

  function confirmUpdate(){
    editPlayer(player.id, formState.value);
    updateTable();
  }

  function isValidForm() {
    const { 
      first_name,
      last_name,
      jersey_number,
      position,
    } = formState.value

    return first_name !== '' && last_name !== '' 
      && jersey_number !== '' && position !== ''
  }
</script>
<template>
    <Modal 
      @confirm="confirmUpdate"
      :is-disabled="!isValidForm()"
    >
      <p class="text-xl font-medium">Edit Player Information</p>
      <Form :player="player"/>
    </Modal>
</template>