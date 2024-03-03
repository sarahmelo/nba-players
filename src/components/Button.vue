<script setup lang="ts">

import { defineProps } from 'vue'

const props = defineProps({
    handeFilter: {
        type: Function,
        required: true,
    }
})

function handleFilterProp() {
    props.handeFilter();
}
</script>

<template>
    <button @click="handleFilterProp()">Ordenar</button>
</template>

<style></style>