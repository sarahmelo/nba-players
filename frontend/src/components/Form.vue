<script setup>
import Input from '../components/Input.vue'

const props = defineProps({
    playerData: {
        required: true,
    }
})

function objectIsDefined() {
    return Object.keys(props.playerData).length > 0
}

</script> 
<template>
    <form>
        <fieldset class="flex flex-col gap-4">
            <legend class="mb-8 text-lg font-semibold text-[1.22rem]">
                Edit Player Information
            </legend>
            <p class="text-sm" v-if="!objectIsDefined()">
                Loading data of players, awaiting...
            </p>
            <label for="name">First Name</label>
                <Input :placeholder="'Junior'" :value="playerData.first_name" :id="'name'"/>
                <label for="lastName">Last Name</label>
                <Input :placeholder="'Pereira Costa'" :value="playerData.last_name" :id="'lastName'"/>
                <label for="jerseyNumber">Jersey Number</label>
                <Input :placeholder="'10'" :type="'text'" :value="playerData.jersey_number" :id="'jerseyNumber'"/>
                <label for="position">Positon</label>
                <Input :placeholder="'G'" :type="'text'" :value="playerData.position" :id="'position'"/>
                <div class="flex justify-between gap-4 mt-4">
                    <router-link :to="{ name: 'home' }">
                        <button 
                            class="rounded border border-red-600 text-red-600 font-semibold uppercase text-sm px-4 py-2"
                            @click="handleCancel"	
                        >
                            Cancel
                        </button>
                    </router-link>
                    <router-link :to="{ name: 'home' }">
                        <button 
                            class="rounded bg-blue-800 text-white font-semibold uppercase text-sm px-4 py-2"
                            @click="handleSubmit"
                        >
                            Save
                        </button>
                    </router-link>
                </div>
            
        </fieldset>
    </form>
</template>