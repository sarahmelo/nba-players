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
    </div>
</template>
