<script setup lang="ts">
  import { modalState } from '../state';
  import Modal from './Modal.vue';

  function close(){
    modalState.value = 'off'
  }
</script>
<template>
    <Modal
      @confirm="close"
      :hidden-buttons="true"
    >
      <p class="text-xl font-medium text-red-600">Oops! Something went wrong</p>
      <p class="text-base font-normal">
        We are experiencing instabilities in our system. Please wait and try again later.
      </p>
    </Modal>
</template>