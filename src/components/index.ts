// 把svgicon定义为全局组件,先引入
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// 全局组件的对象
const allGlobalComponent = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  // 必须叫做install
  install(app) {
    // 注册项目全局组件
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key)
    })
  },
}
