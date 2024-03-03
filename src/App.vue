<script setup>
import { Suspense } from 'vue'
import Table from './components/Table.vue'

</script>

<template>
  <div>
    <Suspense>
      <Table/>
      <template #fallback>
        <h1 class="text-3xl font-bold underline">Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<style scoped></style>
