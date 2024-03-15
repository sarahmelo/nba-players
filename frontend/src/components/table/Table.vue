<script setup lang="ts">
  import { ref } from 'vue';
  import { router } from '../../routes';
  import { handleActiveModal, playerList } from '../../state';
  import Modal from '../Modal.vue';

  let isAscending = ref(false);

  function navigateEditPlayerPage(playerId: number) {
    router.push({
      name: 'edit-player',
      params: {
        id: playerId
      }
    })
  }

  function sortTable() { 
    isAscending.value = !isAscending.value

    return isAscending.value
      ? playerList.value?.sort((a, b) => a.first_name.localeCompare(b.first_name))
      : playerList.value?.sort((a, b) => b.first_name.localeCompare(a.first_name))

  }

  function tableColumns() {
    return ['First Name', 'Last Name', 'Position', 'Height', 'Weight', 'Team', 'Country',]
  }

</script>
<template>
  <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th 
                    v-for="col in tableColumns()" 
                    scope="col" 
                    class="px-6 py-3"
                  >
                    <div 
                      class="flex items-center" 
                      v-if="col === 'First Name'"
                    >
                      {{ col }}
                      <button @click="sortTable()">
                        <svg 
                        class="w-6 h-6 text-gray-800 dark:text-white" 
                        aria-hidden="true"  
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          stroke="currentColor" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="m8 15 4 4 4-4m0-6-4-4-4 4"
                        />
                      </svg>
                      </button>
                    </div>  
                    <div 
                      v-if="col !== 'First Name'" 
                      class="flex items-center"
                    >
                          {{ col }}
                      </div>
                  </th>
                  <th 
                    scope="col" 
                    class="px-6 py-3"
                  >
                      <div class="flex items-center">Actions</div>
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr 
                v-for="player in playerList" 
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                  <td class="px-6 py-4">
                      {{ player.first_name }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.last_name }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.position }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.height }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.weight }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.team.full_name }}
                  </td>
                  <td class="px-6 py-4">
                      {{ player.country }}
                  </td>
                  <td class="flex gap-2 px-6 py-4 text-right">
                    <button 
                      @click="handleActiveModal"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <button 
                      @click="navigateEditPlayerPage(player.id)"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
  <Modal :close="handleActiveModal">
    <p class="text-lg font-medium">Remove Player</p>
    <p class="text-base">Do you really want to delete this player?</p>
  </Modal>
</template>../../api../../main../../state
