<script setup>
import { ref } from 'vue';

const emit = defineEmits(['currentDrink'])
const props = defineProps({
  activeDrink: String
})

const drinkTypes = ref([
  {name: 'Кофе', img: 'src/assets/img/coffee.png'},
  {name: 'Чай', img: 'src/assets/img/tea.png'},
  {name: 'Молочный коктейль', img: 'src/assets/img/milk-coctail.png'},
  {name: 'Морсы и газ. напитки', img: 'src/assets/img/juice-water.png'}
])
</script>

<template>
  <section class="" :class="{ сoffee: activeDrink === 'Кофе', tea: activeDrink === 'Чай', milk: activeDrink === 'Молочный коктейль', water: activeDrink === 'Морсы и газ. напитки'}" >
    <div class="grid grid-cols-4 items-start">
      <div class="flex flex-col items-center h-80 relative first:rounded-tl-4xl last:rounded-tr-4xl grey" v-for="drink in drinkTypes" :key="drink.name" @click="$emit('currentDrink',drink.name)" :class="{ activeCard : activeDrink === drink.name}">
        <img :src="drink.img" alt="" class="h-64 w-64">
        <p class="mont text-3xl font-medium text-center w-52">{{ drink.name }}</p>
        <div class="w-10 h-5 absolute -bottom-24 triangle" v-if="activeDrink === drink.name"></div>
      </div>
    </div>
  </section>
</template>