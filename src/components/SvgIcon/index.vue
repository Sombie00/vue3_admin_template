<template>
  <div>
    <!-- svg:图标外层的容器,需要和use配合 -->
    <svg :style="{ width: width, height: height }">
      <!-- 通过use的属性来指定用什么图标 -->
      <!-- 属性值是icon-属性值 -->
      <!-- fill属性可以设置颜色 -->
      <!-- 在前面加冒号(：xlink或者是：color意思就是用模板语法) -->
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
//   接受父组件传递的参数
defineProps({
  // 前缀,默认是
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 父组件还要提供使用图标的名字
  name: String,
  // 父组件还要提供颜色
  color: {
    type: String,
    default: '',
  },
  // 父组件提供图标宽度
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
