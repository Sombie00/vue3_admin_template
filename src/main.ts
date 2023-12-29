import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 配置element-plus国际化
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })

// SVG插件需要的配置代码
import 'virtual:svg-icons-register'

// 把svgicon定义为全局组件,先引入
import SvgIcon from '@/components/SvgIcon/index.vue'
// 在注册,第一个参数是用的时候标签怎么写,第二个是注册的是哪一个
app.component('SvgIcon', SvgIcon)

// 引入自定义插件对象:整个项目的全局组件
import GlobalComponents from '@/components/index.ts'
// 安装自定义插件
app.use(GlobalComponents)

// 引入模板的全局样式
import '@/styles/index.scss'

// 把应用挂载
app.mount('#app')
