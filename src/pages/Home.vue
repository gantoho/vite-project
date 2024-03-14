<script setup lang='ts'>
import { toRefs } from 'vue'
import { useTestStore } from '@/store/testStore'

const testStore = useTestStore()
const { state, add } = toRefs(testStore)

const changeState = add
</script>

<template>
  <div class="home">
    Home
    {{ state }}
    <button @click="changeState">changeState</button>
  </div>
</template>

<style lang='scss' scoped>

</style>