import { createApp, createSSRApp } from 'vue'
import App from './App.vue'
import './styles.css'

const root = document.querySelector('#app')

if (root) {
  const app = root.hasChildNodes() ? createSSRApp(App) : createApp(App)
  app.mount(root)
}
