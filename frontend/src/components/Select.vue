<script setup lang="ts">
    import { PropType } from 'vue'
    import { formState } from '../state';

    const { options } = defineProps({
        modelValue: {
            default: null,
            required: true,
            type: Number,
        },
        options: {
            type: Object as PropType<Team[]>,
        }
    })
</script>
<template>
    <select 
        @select="$emit('update:modelValue', $event.target.value)"
        v-model="formState.team_id"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
        <option selected>Choose a Team</option>
        <option 
            v-for="option in options" 
            :value="option.id"
            :key="option.id"
        >
            {{ option.full_name }}
        </option>
    </select>
</template>