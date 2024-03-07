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
	<Suspense>
		<Form :userData="player.value" />
		<template #fallback>
			Carregando...
		</template>
	</Suspense>
</template>