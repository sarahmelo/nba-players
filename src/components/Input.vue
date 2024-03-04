<script setup lang="ts">
import { getCurrentInstance, ref } from 'vue';

let inputValue = ref<string>('')

defineEmits(['emitValue', 'resetInput']);
defineProps({
    placeholder: {
        type: String,
        required: true,
    }
});

</script>
<template>
    <input 
        type="search" 
        :v-placeholder="placeholder" 
        v-model="inputValue"
        @input="$emit('emitValue', inputValue)"
    >
    <button 
        v-if="inputValue"
        type="reset"
        @click="$emit('resetInput')"
        class="text-white px-2 bg-indigo-600 justify-center rounded"
    >
        <span class="text-bolder">Reset</span>
    </button>
</template>
