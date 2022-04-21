<template>
  <div>
    qwe
    <span>wer</span>
    <a
        download="123.xlsx"
        href="./index.xlsx"
        target="_blank"
    >xiazai</a>
  </div>
  <el-button @click="num++">
    {{ num }}
  </el-button>
  <el-input v-model="acc"/>
</template>

<script setup lang="ts">
import {useIndexStore} from "../store"
import type {ComponentInternalInstance} from 'vue'

const indexStore = useIndexStore()
const {num} = storeToRefs(indexStore)
const {proxy} = getCurrentInstance() as ComponentInternalInstance
console.log(proxy)
const acc = ref('')
console.log('----------------', acc)


</script>

<style scoped lang='less'>
div {
  color: red;
  text-transform: capitalize;

  span {
    color: aqua;
  }
}
</style>
