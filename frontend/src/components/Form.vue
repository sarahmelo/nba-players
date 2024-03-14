<script setup>
  import Input from '../components/Input.vue'
  import Modal from './Modal.vue';
  import { isOpen } from '../api';

  const props = defineProps({
    playerData: {
      required: true,
    }
  })

  function objectIsDefined() {
    return Object.keys(props.playerData).length > 0
  }

  function handleActiveModal(event) {
    event.preventDefault();
    isOpen.value = !isOpen.value
  }
</script>
<template>
  <form
    class="form-container p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <fieldset class="flex flex-col gap-4">
      <legend class="mb-8 text-lg font-semibold text-[1.22rem]">
        Edit Player Information
      </legend>
      <p class="text-sm" v-if="!objectIsDefined()">
        Loading data of players, awaiting...
      </p>
      <label for="name">First Name</label>
      <Input :placeholder="'Junior'" :value="playerData.first_name" :id="'name'" />
      <label for="lastName">Last Name</label>
      <Input :placeholder="'Pereira Costa'" :value="playerData.last_name" :id="'lastName'" />
      <label for="jerseyNumber">Jersey Number</label>
      <Input :placeholder="'10'" :type="'text'" :value="playerData.jersey_number" :id="'jerseyNumber'" />
      <label for="position">Positon</label>
      <Input :placeholder="'G'" :type="'text'" :value="playerData.position" :id="'position'" />
      <div class="flex justify-between gap-4 mt-4">
        <router-link :to="{ name: 'home' }">
          <button class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
            @click="handleCancel">
            Cancel
          </button>

        </router-link>
        <router-link :to="{ name: 'home' }">
          <button class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
            @click="handleActiveModal">
            Save
          </button>
        </router-link>
      </div>
    </fieldset>
  </form>
  <Modal :close="handleActiveModal">
    <p class="text-lg font-medium">Update Player Information</p>
    <p class="text-base">Do you really want to update this player's data?</p>
  </Modal>
</template>
<style scoped>
  .form-container {
    width: min(calc(100vh - 2rem), 40rem);
  }
</style>