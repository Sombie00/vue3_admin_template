<template>
  <div>
    <h1>测试代码</h1>
  </div>
</template>

<script lang="ts" setup>
import request from '@/utils/request'
import { onMounted } from 'vue'
// 组件挂在完毕测试发一个请求
onMounted(() => {
  request({
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '111111',
    },
  }).then((res) => {
    console.log(res)
  })
})
</script>

<style scoped lang="scss">
div {
  h1 {
    color: red;
  }
}
</style>
