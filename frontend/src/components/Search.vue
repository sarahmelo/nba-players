<script setup lang="ts">
  import { ref } from 'vue';
  import Input from './Input.vue';

  let inputValue = ref<string>('')

  defineOptions({
    inheritAttrs: false,
  })
  const emit = defineEmits({
    emitValue: (value) => value
  });
</script>
<template>
  <div class="flex items-end">
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <span class="material-symbols-outlined text-black opacity-20">
          search
        </span>
      </div>
      <Input
        v-bind="$attrs"
        :placeholder="'Busque por jogadores'" 
        :type="'search'" 
        :label="'Busque por jogadores'" 
        :id="'search'"
        @emit-value="$emit('emitValue', $event)" 
        v-model="inputValue"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />  
    </div>
  </div>
</template>
