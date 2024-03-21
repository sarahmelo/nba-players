<script setup lang="ts">
  import Input from '../components/Input.vue'
  import { COLUMNS, formState, teams } from '../state';
  import Select from './Select.vue';

</script>
<template>
  <form class="overflow-scroll flex flex-col gap-4">
    <div class="contents" v-for="key in Object.keys(COLUMNS)">
      <label 
        v-if="key !== 'team'" 
        :for="key"
      >
        {{ COLUMNS[key as keyof typeof COLUMNS] }}
        <Input 
          :id="key" 
          type="text" 
          v-model="formState![key as keyof typeof formState] as string"
        />
      </label>
    </div>
    <label for="team">
      {{ COLUMNS.team }}
      <Select 
        id="team" 
        name="team" 
        :options="teams"
      />
    </label>
  </form>
</template>