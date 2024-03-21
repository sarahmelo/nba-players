<script setup lang="ts">
  import { ref } from 'vue';
  import { 
    COLUMNS, 
    handleActiveModal, 
    modalState, 
    playerList, 
    playerListFiltered 
  } from '../state';

  const isAscending = ref(false);
  const emits = defineEmits(['onEdit', 'onRemove'])

  function sortTable() { 
    isAscending.value = !isAscending.value

    return isAscending.value
      ? playerList.value?.sort((a: Player, b: Player) => a.first_name.localeCompare(b.first_name))
      : playerList.value?.sort((a: Player, b: Player) => b.first_name.localeCompare(a.first_name))
  }

  function openModalDelete(event: Event, player: Player) {
    emits('onRemove', player)
    modalState.value = 'delete';
    handleActiveModal(event);
  }

  function openModalEdit(event: Event, player: Player) {
    emits('onEdit', player);
    modalState.value = 'edit';
    handleActiveModal(event);
  }

</script>
<template>
  <div class="max-h-[75vh] relative w-full overflow-x-auto sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th 
                    v-for="column of Object.keys(COLUMNS)" 
                    scope="col" 
                    class="px-6 py-3"
                  >
                    <div 
                      class="flex items-center" 
                    >
                      {{ COLUMNS[column as keyof typeof COLUMNS] }}
                      <button v-if="column === 'first_name'" @click="sortTable()">
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
                v-for="player in playerListFiltered" 
                :key="player.id"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                  <td class="px-6 py-4" v-for="key in Object.keys(COLUMNS)">
                      <span v-if="key === 'team'">
                        {{ player['team'].name ?? '-' }}
                      </span>
                      <span v-else>
                        {{ player[key as keyof typeof COLUMNS] ?? '-' }}
                      </span>
                  </td>
                  <td class="flex gap-2 px-6 py-4 text-right">
                    <button 
                      @click="event => openModalDelete(event, player)"
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                    <button 
                      @click="event => openModalEdit(event, player)"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
