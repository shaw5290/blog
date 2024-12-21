import BlogTheme from '@sugarat/theme'

// 自定义样式重载
import './style.scss'

// 自定义主题色
import './user-theme.css'

//自定义拓展 XmindViewer
import Xmind from '../components/Xmind.vue'

export default {
  extends: BlogTheme,
  enhanceApp({ app }) {
    app.component('Xmind', Xmind)
  },
}
