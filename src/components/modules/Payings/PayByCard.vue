<script setup>
import AppButton from '@/components/modules/AppButton.vue';

const emit = defineEmits(['closePaying'])
</script>

<template>
  <div class="w-1080 h-1878 relative yellow">
    <div class="flex pt-61rem flex-col items-center justify-center gap-16" @click="$router.push('/cooking')">
      <img src="@/assets/img/bankCard.png" alt="">
      <p class="mont font-medium text-7xl mx-64 text-center">Приложите карту к терминалу</p>
    </div>
    <app-button class="bg-white absolute bottom-12 w-65" @click="$emit('closePaying')">Отмена</app-button>
  </div>
</template>