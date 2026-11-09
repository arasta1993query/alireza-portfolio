import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export function renderPortfolio() {
  return renderToString(createSSRApp(App))
}
