<script setup>
import TheHeader from '@/components/modules/TheHeader.vue';
import DrinkBar from '@/components/modules/Cafe/DrinkBar.vue';
import DrinkCard from '@/components/modules/Cafe/DrinkCard.vue';
import DrinkCardHeader from '@/components/modules/Cafe/DrinkCardHeader.vue';
import AppDrink from '@/components/modules/Cafe/AppDrink.vue';
import { ref, computed } from 'vue';

const activeDrink = ref('Кофе')
function currentDrink(drink) {
  activeDrink.value = drink
}

const drinkAssortiment = ref([
  {name: 'Кофе', body:[
    {name: 'Эспрессо', price: ['79','159','229'], img: '/src/assets/img/cofe/espresso.png'},
    {name: 'Двойной Эспрессо', price: ['109','159','229'], img: '/src/assets/img/cofe/espresso.png'},
    {name: 'Американо', price: ['119','169','239'], img: '/src/assets/img/cofe/amerikano.png'},
    {name: 'Латте', price: ['129','179','249'], img: '/src/assets/img/cofe/latte.svg'},
    {name: 'Капучино', price: ['129','179','249'], img: '/src/assets/img/cofe/capuccino.svg'},
    {name: 'Макиато', price: ['129','179','249'], img: '/src/assets/img/cofe/makiato.svg'},
  ]},
  {name: 'Чай', body:[
    {name: 'Черный чай', price: ['109','159','229'], img: '/src/assets/img/tea.png'},
    {name: 'Зеленый чай', price: ['109','159','229'], img: '/src/assets/img/tea.png'},
    {name: 'Чай с жасмином', price: ['119','169','239'], img: '/src/assets/img/tea.png'},
    {name: 'Чай с бергамотом', price: ['119','169','239'], img: '/src/assets/img/tea.png'},
    {name: 'Молочный улун', price: ['129','179','249'], img: '/src/assets/img/tea.png'},
    {name: 'Ягодный чай', price: ['129','179','249'], img: '/src/assets/img/tea.png'},
  ]},
  {name: 'Молочный коктейль',  body:[
    {name: 'Молочный коктейль', price: ['109','159','229'], img: '/src/assets/img/milk-coctail.png'},
    {name: 'Ванильный коктейль', price: ['109','159','229'], img: '/src/assets/img/milk-coctail.png'},
    {name: 'Ягодный коктейль', price: ['119','169','239'], img: '/src/assets/img/milk-coctail.png'},
    {name: 'Шоколадный коктейль', price: ['119','169','239'], img: '/src/assets/img/milk-coctail.png'},
    {name: 'Коктейль', price: ['129','179','249'], img: '/src/assets/img/milk-coctail.png'},
    {name: 'Коктейль', price: ['129','179','249'], img: '/src/assets/img/milk-coctail.png'},
  ]},
  {name: 'Морсы и газ. напитки',  body:[
    {name: 'Вода', price: ['109','159','229'], img: '/src/assets/img/juice-water.png'},
    {name: 'Газированная вода', price: ['109','159','229'], img: '/src/assets/img/juice-water.png'},
    {name: 'Морс ягодный', price: ['119','169','239'], img: '/src/assets/img/juice-water.png'},
    {name: 'Морс облепиховый', price: ['119','169','239'], img: '/src/assets/img/juice-water.png'},
    {name: 'Морс', price: ['129','179','249'], img: '/src/assets/img/juice-water.png'},
    {name: 'Морс', price: ['129','179','249'], img: '/src/assets/img/juice-water.png'},
  ]}
])

const activeCards = computed(() => {
  return drinkAssortiment.value.find(drinkAssortiment => drinkAssortiment.name === activeDrink.value).body
})

const chosen = ref('')
function chosenItem(item){
  chosen.value = item
  console.log(chosen.value)
}
</script>

<template>
  <div class="w-1080 h-1878 mx-auto" :class="{ сoffee: activeDrink === 'Кофе', tea: activeDrink === 'Чай', milk: activeDrink === 'Молочный коктейль', water: activeDrink === 'Морсы и газ. напитки'}">
    <the-header :activeDrink="activeDrink"></the-header>
    <div class="grey" v-if="chosen === ''">
      <drink-bar @currentDrink="currentDrink" :activeDrink="activeDrink"></drink-bar>

      <section class="flex flex-col gap-16 px-5 pb-5 text-7xl bg-white rounded35px-tl-tr" >
        <drink-card-header :activeDrink="activeDrink"></drink-card-header>
        <div>
          <div class="grid grid-cols-3 gap-5">
            <drink-card :items="activeCards" @chosenItem="chosenItem"></drink-card>
          </div>
        </div>
      </section>
    </div>
      <app-drink :chosen="chosen" v-if="chosen" @closeChoosingDrink="chosen = ''"></app-drink>
  </div>
</template>