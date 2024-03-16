<script setup lang="ts">
  import Input from '../components/Input.vue'
  import Modal from './Modal.vue';
  import { handleActiveModal } from '../state';
  import { PropType, ref } from 'vue';
  import { editPlayer } from '../services';

  const { playerId } = defineProps({
    player: {
      type: Object as PropType<IPlayer>,
      required: true,
    },
    playerId: {
      type: Number,
      required: true,
    }
  })

  const formState = ref<Pick<IPlayer, 'first_name' | 'last_name' | 'position' | 'jersey_number' >>({
    first_name: '',
    last_name: '',
    jersey_number: '',
    position: '',
  })

  function isValidForm() {
    const {
      first_name,
      jersey_number,
      last_name,
      position,
    } = formState.value;

    return first_name !== '' && jersey_number !== '' 
      && last_name !== '' && position !== '';
  }
  
  async function editPlayerInformations() {
    await editPlayer(
      playerId,
      formState.value
    )
  }


</script>
<template>
  <form
    class="form-container p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <fieldset class="flex flex-col gap-4">
      <legend class="mb-8 text-lg font-semibold text-[1.22rem]">
        Edit Player Information
      </legend>
      <label for="name">First Name</label>
      <Input 
        :placeholder="'Junior'" 
        :id="'name'" 
        :type="'text'" 
        v-model="formState.first_name"
      />
      <label for="lastName">Last Name</label>
      <Input 
        :placeholder="'Pereira Costa'" 
        :id="'lastName'"
        :type="'text'" 
        v-model="formState.last_name"
      />
      <label for="jerseyNumber">Jersey Number</label>
      <Input 
        :placeholder="'10'"
        :id="'jerseyNumber'" 
        :type="'text'" 
        :ref="formState.jersey_number"
        v-model="formState.jersey_number"
      />
      <label for="position">Positon</label>
      <Input 
        :placeholder="'G'" 
        :type="'text'" 
        :id="'position'"
        v-model="formState.position"
      />
      <div class="flex justify-between gap-4 mt-4">
        <router-link :to="{ name: 'home' }">
          <button class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
          >
            Cancel
          </button>

        </router-link>
        <router-link :to="{ name: 'home' }">
          <button 
            :disabled="!isValidForm()"
            class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2 disabled:opacity-75"
            @click="handleActiveModal">
            Update
          </button>
        </router-link>
      </div>
    </fieldset>
  </form>
  <Modal @confirm="editPlayerInformations">
    <p class="text-lg font-medium">Update Player Information</p>
    <p class="text-base">Do you really want to update this player's data?</p>
  </Modal>
</template>
<style scoped>
  .form-container {
    width: min(calc(100vh - 2rem), 40rem);
  }
</style>../state