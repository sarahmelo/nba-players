<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import Input from './Input.vue';

let inputValue = ref<string>('')

const emit = defineEmits(['emitValue', 'resetInput']);
defineProps({
    placeholder: {
        type: String,
        required: true,
    }
});
function handleEmitValue(value: string) {
    console.log(value)
    emit('emitValue', value)
}

</script>
<template>
    <div class="flex items-end">
        <Input
            :type="'search'"
            :label="'Busque por jogadores'"
            :id="'search'"
            @emit-value="handleEmitValue"
            v-model="inputValue"

        />
        <button 
            v-if="inputValue"
            type="reset"
            @click="$emit('resetInput')"
            class="text-white px-2 bg-indigo-600 justify-center rounded"
        >
            <span class="text-bolder">Reset</span>
        </button>
    </div>
</template>
