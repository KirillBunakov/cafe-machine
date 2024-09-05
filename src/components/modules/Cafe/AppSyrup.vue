<script setup>
import { ref } from 'vue';
const emit = defineEmits(['minusAmount','plusAmount'])

const syrups = ref([
  {name: 'Ванильный сироп', amount: 0},
  {name: 'Мятный сироп', amount: 0},
  {name: 'Карамельный сироп', amount: 0},
  {name: 'Шоколадный сироп', amount: 0},
])
</script>

<template>
  <section class="mx-5 pt-50 flex flex-col gap-4">
    <div class="mont text-4xl py-3 px-5 border-1 rounded-3xl flex flex-row justify-between items-center box-border h-119px" v-for="(syrup, idx) in syrups" :key="syrups[idx]">
      <div>{{ syrup.name }}</div>
      <div class="flex flex-row">
        <div class="grey h-95px w-95px rounded-2xl flex items-center justify-center" @click="syrup.amount = syrup.amount - 20, $emit('minusAmount', syrup.amount)">-</div>
        <div class="flex items-center justify-center w-32">{{ syrup.amount < 0 ? syrup.amount = 0 : syrup.amount > 60 ? syrup.amount = 60 : syrup.amount }} гр.</div>
        <div class="yellow h-95px w-95px rounded-2xl flex items-center justify-center" @click="syrup.amount = syrup.amount + 20,$emit('plusAmount', syrup.amount)">+</div>
      </div>
    </div>
  </section>
</template>