<script setup>
import router from '@/router';
import { ref } from 'vue';

const timer = ref(60)
setInterval(() => { 
  timer.value-- 
  if (timer.value === 0) {
    router.push({ path: '/success'})
    console.log('ноль')
  }} , 1000 );
</script>

<template>
  <div class="w-67_5rem h-1878 flex flex-col justify-center mx-auto">
    <div class="timer circle relative flex items-center justify-center rounded-full mx-auto">
      <div class="outer yellow absolute h-full w-full rounded-full"></div>
      <div class="inner flex flex-col items-center justify-center rounded-full border-4 mx-20 timer timer-animation bg-white">
        <p class="text-16rem">0:{{ timer }}</p>
        <div class="text-5xl text-grey">Приготовление напитка</div>
      </div>
    </div>
  </div>
</template>

<style>
.circle>div {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
}

.outer {
  clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 100%, 0 0, 50% 0, 50% 50%, 50% 50%);
  animation: round 60s linear infinite;
}

.inner {
  transform: scale(0.985);
}

@keyframes round {
  12.5% {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 100%, 0 0, 0 0, 50% 50%, 50% 50%);
  }
  25% {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 100%, 0 50%, 0 50%, 50% 50%, 50% 50%);
  }
  37.5% {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 100%, 0 100%, 0 100%, 50% 50%, 50% 50%);
  }
  50% {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 50%, 50% 50%);
  }
  62.5% {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 50%, 50% 50%);
  }
  75% {
    clip-path: polygon(50% 0%, 100% 0, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 100% 50%, 50% 50%, 50% 50%);
  }
  87.5% {
    clip-path: polygon(50% 0%, 100% 0, 100% 0, 100% 0, 100% 0, 100% 0, 100% 0, 50% 50%, 50% 50%);
  }
  100% {
    clip-path: polygon(50% 0%, 50% 0, 50% 0, 50% 0, 50% 0, 50% 0, 50% 0, 50% 50%, 50% 50%);
  }
}
</style>