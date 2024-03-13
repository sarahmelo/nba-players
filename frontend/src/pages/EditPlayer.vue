<script setup>
	import { ref, watchEffect } from 'vue';
	import { getPlayerDetails } from '../request';
	import { router } from '../main';
	import Form from '../components/Form.vue';

	const player = ref({});
    
	watchEffect(async() => {
		const profileId = router.currentRoute.value.params.id

		player.value = await getPlayerDetails(profileId);
	})
</script>
<template>
	<div class="form-container p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
		<Form :playerData="player" />
	</div>
</template>
<style>
.form-container {
	width: min(calc(100vh - 2rem), 40rem);

}
</style>