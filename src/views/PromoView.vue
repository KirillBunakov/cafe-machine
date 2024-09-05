<template>
  <div>
  <promo1 @click="router.push({ path: '/cafe'})" v-if="showPromo === 1"></promo1>
  <promo2 @click="router.push({ path: '/cafe'})" v-if="showPromo === 2"></promo2>
  <promo3 @click="router.push({ path: '/cafe'})" v-if="showPromo === 3"></promo3>
  </div>
</template>

<script setup>
import Promo1 from '@/components/modules/Promo/Promo1.vue';
import Promo2 from '@/components/modules/Promo/Promo2.vue';
import Promo3 from '@/components/modules/Promo/Promo3.vue';
import router from '@/router';
import { ref } from 'vue';

const showPromo = ref(Math.floor(Math.random() * (4 - 1)) + 1)
</script>