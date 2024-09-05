<template>
  <div class="grid grid-cols-3 gap-5 mx-5 h-92 mt-11">
    <div class="grey flex flex-col items-center justify-end gap-10 rounded-2xl box-border" @click="$emit('changeVolume', volume = 1)" :class="{ yellow : chosenVolume === 1}">
      <img src="@/assets/img/bottle.svg" alt="" class="bottle-s">
      <p class="mont text-42 mb-10">200 мл.</p>
    </div>
    <div class="grey flex flex-col items-center justify-end gap-10 rounded-2xl box-border" @click="$emit('changeVolume', volume = 2)" :class="{ yellow : chosenVolume === 2}">
      <img src="@/assets/img/bottle.svg" alt="" class="bottle-m">
      <p class="mont text-42 mb-10">300 мл.</p>
    </div>
    <div class="grey flex flex-col items-center justify-end gap-10 rounded-2xl box-border" @click="$emit('changeVolume', volume = 3)" :class="{ yellow : chosenVolume === 3}">
      <img src="@/assets/img/bottle.svg" alt="" class="bottle-l">
      <p class="mont text-42 mb-10">400 мл.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  chosenVolume: Number
})
const emit = defineEmits(['changeVolume'])
</script>