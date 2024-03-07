<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    handleFilter: {
        type: Function as PropType<() => void>,
        required: true,
    },
    text: {
        type: String,
        required: true
    },
    isAscending: {
        type: Boolean,
        required: true,
    }
})

function handleOnClick() {
    props.handleFilter()
}

</script>

<template>
    <button 
        type="button"
        class="button h-fit border border-solid text-blue-800 border-blue-800 px-4 py-2 rounded"
        @click="handleOnClick"
    >
        {{ props.isAscending ? 'Z-A' : 'A-Z' }}
    </button>
</template>

<style></style>