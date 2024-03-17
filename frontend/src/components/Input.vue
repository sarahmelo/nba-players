<script setup>
	import { ref } from 'vue';

	const inputValue = ref('');
	const props = defineProps({
		id: {
			type: String,
			required: true,
		},
	})

	defineEmits(['emitValue']);
</script>

<template>
	<input 
		class="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		:id="props.id"
		:type="'text'" 
		@input="$emit('emitValue', $event.target.value)"
	>
</template>