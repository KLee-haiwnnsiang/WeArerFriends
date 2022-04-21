<template>
  <div>
    qwe
    <span>wer</span>
  </div>
  <el-button @click="num++">
    {{ num }}
  </el-button>
  <el-input v-model="acc"/>
</template>

<script setup lang="ts">
import {useIndexStore} from "../store"

const indexStore = useIndexStore()
const {num} = storeToRefs(indexStore)
const $Api: any = inject('$Api')
const res = $Api.login.login({account: '123', password: '123'})
console.log(123, res)
const acc = ref('')
console.log('----------------', acc)
const {getNum, number} = indexStore
getNum()
console.log(number, 'number')

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
