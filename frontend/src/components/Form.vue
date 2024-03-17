<script setup lang="ts">
  import Input from '../components/Input.vue'
  import { formState } from '../state';

</script>
<template>
  <form>
    <fieldset class="flex flex-col gap-4">
      <legend class="mb-8 text-lg font-semibold text-[1.22rem]">
        Edit Player Information
      </legend>
      <label for="name">First Name 22</label>
      <Input 
        :placeholder="'Junior'" 
        :id="'first_name'" 
        :type="'text'" 
        :value="formState.first_name"
        v-model="formState.first_name"
      />
      <label for="lastName">Last Name</label>
      <Input 
        :placeholder="'Pereira Costa'" 
        :id="'last_name'"
        :type="'text'" 
        :value="formState.last_name"
        v-model="formState.last_name"
      />
      <label for="jerseyNumber">Jersey Number</label>
      <Input 
        :placeholder="'10'"
        :id="'jersey_number'" 
        :type="'text'" 
        :ref="formState.jersey_number"
        :value="formState.jersey_number"
        v-model="formState.jersey_number"
      />
      <label for="position">Positon</label>
      <Input 
        :placeholder="'G'" 
        :type="'text'" 
        :id="'position'"
        :value="formState.position"
        v-model="formState.position"
      />
    </fieldset>
  </form>
</template>