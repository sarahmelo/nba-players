<script setup>
import Input from '../components/Input.vue'

const props = defineProps({
    userData: {
        required: true,
    }
})

function handleCancel() {

}

function handleSubmit() {

}
</script> 
<template>
    <form class="w-full max-w-[40rem]">
        <fieldset class="flex flex-col gap-4">
            <legend class="mb-8 text-lg font-bold text-[1.25rem]">
                Edite as informações do jogador
            </legend>
                <Input :id="'name'" :label="'Nome'"/>
                <Input :type="'date'" :id="'birthdate'" :label="'Data de Nascimento'"/>
                <Input :type="'text'" :id="'height'" :label="'Altura'"/>
                <Input :type="'text'" :id="'width'" :label="'Peso'"/>
                <Input :type="'text'" :id="'shirtNumber'" :label="'Número da Camisa'"/>
                <Input :type="'text'" :id="'school'" :label="'Colégio'"/>
            <div class="flex gap-4 mt-4">
                <router-link :to="{ name: 'home' }">
                    <button 
                        class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
                        @click="handleCancel"	
                    >
                        Cancelar
                    </button>
                </router-link>
                <router-link :to="{ name: 'home' }">
                    <button 
                        class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
                        @click="handleSubmit"
                    >
                        Salvar
                    </button>
                </router-link>
            </div>
        </fieldset>
    </form>
</template>