<script setup>
const props = defineProps({
  items: Array
})
const emit = defineEmits(['chosenItem'])
</script>

<template>
  <div class="w-drinkcard h-drinkcard flex flex-col items-center rounded35px card-border border-2 pt-5" v-for="item in items" @click="$emit('chosenItem', item)">
    <img :src="item.img" alt="" class="w-296 h-296">
    <div class="flex flex-col items-center mt-11 mb-6">
      <p class="mont text-32 font-normal">{{ item.name }}</p>
      <p class="mont text-32 font-normal">от <span class="text-40 font-medium">{{ item.price[0] }}₽</span></p>
    </div>
  </div>
</template>

