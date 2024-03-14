<script setup lang="ts">
  import { ref } from 'vue';
  import Input from './Input.vue';

  let inputValue = ref<string>('')

  const emit = defineEmits({
    emitValue: (value) => value
  });
</script>
<template>
  <div class="flex items-end">
    <Input 
      :placeholder="'Busque por jogadores'" 
      :type="'search'" 
      :label="'Busque por jogadores'" 
      :id="'search'"
      @emit-value="$emit('emitValue', $event)" 
      v-model="inputValue"
    />
  </div>
</template>
