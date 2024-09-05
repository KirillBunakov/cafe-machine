<script setup>
const props = defineProps({
  activeDrink: String
})
</script>

<template>
  <header class="w-1080 h-60 flex items-center relative overflow-hidden" :class="{ сoffee: activeDrink === 'Кофе', tea: activeDrink === 'Чай', milk: activeDrink === 'Молочный коктейль', water: activeDrink === 'Морсы и газ. напитки'}">
    <div class="px-5 flex flex-row justify-between w-full items-center z-10">
      <p class="mont text-header font-medium">Выбор напитка</p>
      <div class="flex flex-row bg-white rounded35px items-center">
        <img src="@/assets/img/phone.svg" alt="">
        <p class="mont font-medium text-2xl pr-7 pl-4">Вход / регистрация</p>
      </div>
    </div>
    <div class="absolute top-30 right-12 z-0">
      <div class="d28 before:coffee-back after:coffee-back" v-if="activeDrink === 'Кофе'"></div>
      <div class="d28 before:tea-back after:tea-back" v-if="activeDrink === 'Чай'"></div>
      <div class="d28 before:coctail-back after:coctail-back" v-if="activeDrink === 'Молочный коктейль'"></div>
      <div class="d28 before:water-back after:water-back" v-if="activeDrink === 'Морсы и газ. напитки'"></div>
    </div>
  </header>
</template>

<style scoped>
.d28 {
height: 200px; 
width: 280px; 
margin: 6px;
rotate: 270deg;
position: relative;
}
.d28:before, 
.d28:after {
content: "";
height: 100%; 
width: 50%;
position: absolute; 
top: 0;
}
.d28:before {
left: 0;
transform: skew(0deg, 10deg);
}
.d28:after {
right: 0;
transform: skew(0deg, -10deg);
}
</style>