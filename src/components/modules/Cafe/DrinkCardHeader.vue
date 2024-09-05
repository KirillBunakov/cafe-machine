<script setup>
const props = defineProps({
  activeDrink: String
})
</script>

<template>
  <div class="ml-5 mt-20 relative mont font-medium">
    <div class="w-36 h-36 rounded-full absolute -top-10 -left-12 z-0" :class="{ сoffee: activeDrink === 'Кофе', tea: activeDrink === 'Чай', milk: activeDrink === 'Молочный коктейль', water: activeDrink === 'Морсы и газ. напитки'}"></div>
    <p class="relative z-10">{{ activeDrink }}</p>
  </div>
</template>