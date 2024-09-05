<script setup>
import BackBtn from '@/components/modules/Payings/BackBtn.vue';
import PayByCard from '@/components/modules/Payings/PayByCard.vue';
import AppButton from '@/components/modules/AppButton.vue';
import { ref } from 'vue';

const goWithoutReg = ref(false)
</script>

<template>
  <div class="w-1080 h-1878 bg-white mx-auto" v-if="goWithoutReg === false">
    <back-btn class="mt-12 mb-96 mx-auto"></back-btn>

    <div class="flex flex-col items-center justify-center gap-4 mb-100">
      <div class="yellow w-60 h-60 rounded50px flex items-center justify-center mb-4"><img src="@/assets/img/rubicon.png" alt=""></div>
      <p class="mont font-medium text-7xl">Система лояльности</p>
      <p class="mont font-medium text-4xl mx-20">Вы можете зарегистрироваться и получать бонусы за каждый напиток. 1 бонус = 1 рубль</p>
    </div>

    <div class="flex flex-col gap-5">
      <app-button class="yellow">Зарегестрироваться</app-button>
      <app-button class="grey" @click="goWithoutReg = true">Продолжить без регистрации</app-button>
    </div>
  </div>
  <pay-by-card class="mx-auto" v-if="goWithoutReg" @closePaying="goWithoutReg = false"></pay-by-card>
</template>
