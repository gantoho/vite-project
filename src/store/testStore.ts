import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestStore = defineStore("test", () => {
  const state = ref(0)
  const add = () => {
    state.value += 1
  }

  return {
    state,
    add
  }
})