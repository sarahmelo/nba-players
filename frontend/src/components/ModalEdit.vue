<script setup lang="ts">
  import { editPlayer } from '../services';
  import { formState } from '../state';
  import Form from './Form.vue';
  import Modal from './Modal.vue';
  import { PropType } from 'vue';

  const { player } = defineProps({
    player: {
      type: Object as PropType<IPlayer>,
      required: true,
    }
  })

  function confirmUpdate(){
    editPlayer(player.id, formState.value)
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
      <Form />
    </Modal>
</template>