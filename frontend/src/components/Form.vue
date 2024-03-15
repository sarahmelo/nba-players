<script setup>
  import Input from '../components/Input.vue'
  import Modal from './Modal.vue';
  import { isOpen } from '../state';
  import { handleActiveModal } from '../state';
  import { editPlayer } from '../services';
  import { ref } from 'vue';

  const formState = ref({
    first_name: '',
    last_name: '',
    jersey_number: '',
    position: '',
  })

  const props = defineProps({
    playerData: {
      required: true,
    }
  })

  function playerDataIsDone() {
    return Object.keys(props.playerData).length > 0
  }

  function editPlayerInformations() {
    await editPlayer();
  }
</script>
<template>
  <form
    class="form-container p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <fieldset class="flex flex-col gap-4">
      <legend class="mb-8 text-lg font-semibold text-[1.22rem]">
        Edit Player Information
      </legend>
      <p class="text-sm" v-if="!playerDataIsDone()">
        Loading data of players, awaiting...
      </p>
      <label for="name">First Name</label>
      <Input 
        :v-model="formState.first_name" 
        :placeholder="'Junior'" 
        :value="playerData.first_name" 
        :id="'name'" 
      />
      <label for="lastName">Last Name</label>
      <Input 
        :v-model="formState.last_name" 
        :placeholder="'Pereira Costa'" 
        :value="playerData.last_name" 
        :id="'lastName'" 
      />
      <label for="jerseyNumber">Jersey Number</label>
      <Input 
        :v-model="formState.jersey_number" 
        :placeholder="'10'"
        :value="playerData.jersey_number" 
        :id="'jerseyNumber'" 
      />
      <label for="position">Positon</label>
      <Input 
        :v-model="formState.position" 
        :placeholder="'G'" 
        :type="'text'" 
        :value="playerData.position" 
        :id="'position'" 
      />
      <div class="flex justify-between gap-4 mt-4">
        <router-link :to="{ name: 'home' }">
          <button class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
            @click="handleCancel">
            Cancel
          </button>

        </router-link>
        <router-link :to="{ name: 'home' }">
          <button 
            :disabled="!playerDataIsDone()"
            class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2 disabled:opacity-75"
            @click="handleActiveModal">
            Update
          </button>
        </router-link>
      </div>
    </fieldset>
  </form>
  <Modal :close="handleActiveModal" :confirm="">
    <p class="text-lg font-medium">Update Player Information</p>
    <p class="text-base">Do you really want to update this player's data?</p>
  </Modal>
</template>
<style scoped>
  .form-container {
    width: min(calc(100vh - 2rem), 40rem);
  }
</style>../state