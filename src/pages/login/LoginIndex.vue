<template>
  <div class="test">{{ mainStore.name }}</div>
  <div>{{ mainStore.nameLength }}</div>
  <button @click="updateName">修改store中的name</button>
  <n-button>naive-ui</n-button>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
import { useMainStore } from '@/store/main'
const mainStore = useMainStore()
const updateName = () => {
  // 环境变量
  // console.log(import.meta.env.VITE_APP_WEB_URL)
  // action
  mainStore.insertPost('改名字啦')

  // $patch
  // mainStore.$patch({
  //   name: '名称被修改了, nameLength也随之改变了',
  // })
}
</script>

<style scoped lang="scss">
.test {
  color: $test-color;
}
</style>
