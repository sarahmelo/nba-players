<script setup>
import { ref, defineEmits } from 'vue';

const inputValue = ref('');

defineEmits(['emitValue']);
const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	}
})
</script>

<template>
	<input :id="props.id"
		class="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		:type="props.type" 
		v-model="inputValue"
		@input="$emit('emitValue', inputValue)"
	>
</template>