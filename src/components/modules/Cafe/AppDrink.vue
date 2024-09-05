<script setup>
import { ref } from 'vue';
import AppSyrup from './AppSyrup.vue';
import BottleVolume from './BottleVolume.vue';
import AppButton from '../AppButton.vue';
import { useDrinkPrice } from '@/stores/drinkPrice';

const emit = defineEmits(['closeChoosingDrink'])
const props = defineProps({
  chosen: Object
})
const addSyrup = ref(false)
const chosenVolume = ref(1)

function changeVolume(volume){
  chosenVolume.value = volume
}

const syrupPrice = ref(0)
function minusAmount(amount){  
  if (amount >= 0) {
    syrupPrice.value = syrupPrice.value - 20
  }
}

function plusAmount(amount){  
  if (amount <= 60) {
    syrupPrice.value = syrupPrice.value + 20
  }
}
const drinkPrice = useDrinkPrice()
</script>

<template>
  <div class="relative">
    <div class="rounded35px-tl-tr bg-white flex flex-col relative z-20">
      <div class="absolute grey w-drinkcard h-40 top-0 rounded35px-bl-br flex items-center justify-center border-2 left-1/2 -translate-x-1/2 -z-10" @click="$emit('closeChoosingDrink')">
        <img src="@/assets/img/closebtn.png" alt="">
      </div>
      <div class="flex flex-col items-center pt-44 gap-10 -z-20">
        <img :src=chosen.img alt="" class="modal-img">
      </div>
      
      <div class="flex flex-col gap-8"  v-if="addSyrup === false">
        <p class="mont text-82 font-medium text-center">{{ chosen.name }}</p>
        <bottle-volume :chosenVolume="chosenVolume" @changeVolume="changeVolume"></bottle-volume>
        <div class="grey h-40 flex items-center justify-center rounded-3xl text-5xl border-yellow box-border mx-5" @click="addSyrup = true" >Хотите добавить сироп?</div>
      </div>
      <div class="relative bg-white rounded35px-tl-tr" v-else>
        <div class="absolute grey w-drinkcard h-40 top-0 rounded35px-bl-br flex items-center justify-center border-2 left-1/2 -translate-x-1/2" @click="addSyrup = false">
          <img src="@/assets/img/closebtn.png" alt="">
        </div>
        <app-syrup @minusAmount="minusAmount" @plusAmount="plusAmount"></app-syrup>
        <div class="absolute dark-grey w-full h-1100 top-1000 -z-10"></div>
      </div>

      <router-link to="/payings">
        <app-button class="yellow mt-5 flex items-center justify-between pl-10 pr-8" @click="drinkPrice.totalPrice = +chosen.price[chosenVolume-1] + +syrupPrice">
          <p>Оплатить</p>
          <p class="font-semibold">{{ +chosen.price[chosenVolume-1] + +syrupPrice }}₽</p>
        </app-button>
      </router-link>
    </div>
    <div class="dark-grey absolute w-full h-80 -top-72 z-10"></div>
  </div>
</template>