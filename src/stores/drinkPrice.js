import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDrinkPrice = defineStore('drinkPrice', () => {
  const totalPrice = ref(0)

  return { totalPrice }
})
