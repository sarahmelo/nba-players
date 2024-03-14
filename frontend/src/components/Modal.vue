<script setup lang="ts">
  import { Teleport } from 'vue';
  import { isOpen } from '../api';

  defineEmits(['close']);

  function closeModal(event: Event) {
    event.preventDefault();
    isOpen.value = false;
  }
</script>
<template>
  <Teleport to="main">
    <span v-if="isOpen" class="modal-container fixed z-10 top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-10">
    </span>
    <div v-if="isOpen" class="modal relative w-fit z-20 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col gap-2">
        <button class="absolute top-2 right-2" @click="closeModal">
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
        <slot></slot>
        <div class="flex justify-between mt-4">
          <button 
          class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
            @click="closeModal"
          >
            Cancel
          </button>
          <button 
            class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
            @click="closeModal"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style scoped>
  .modal-container {
    height: 100vh;
    width: 100vw;
  }

  .modal {
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    position: absolute;
    width: 22.4em;
  }
</style>