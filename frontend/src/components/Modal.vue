<script setup lang="ts">
  import { Teleport } from 'vue';
  import { handleActiveModal, isOpen } from '../state';

  const { hiddenButtons } = defineProps({
    hiddenButtons: {
      default: false,
      type: Boolean,
    }
  })

  const events = defineEmits(['close','confirm']);

  function handleConfirmOperation(event: Event) {
    handleActiveModal(event);
    events('confirm')
  }
  
</script>
<template>
  <Teleport to="main">
    <span 
      v-if="isOpen" 
      class="modal-container fixed z-10 top-0 bottom-0 left-0 right-0 bg-slate-600 opacity-10"
    >
    </span>
    <div 
      v-if="isOpen" 
      class="flex overflow-auto max-h-[80vh] modal fixed w-fit z-20 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex flex-col gap-2">
        <button 
          @click="handleActiveModal"
          class="absolute top-2 right-2"
        >
          <span class="material-symbols-outlined">
            close
          </span>
        </button>
        <slot></slot>
        <div 
          v-if="!hiddenButtons" 
          class="flex justify-between mt-4"
        >
          <button 
            @click="handleActiveModal"
            class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
          >
            Cancel
          </button>
          <button 
            @click="handleConfirmOperation"
            class="rounded disabled:opacity-75 bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
          >
            Confirm
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
    width: 22.4em;
  }
</style>../state