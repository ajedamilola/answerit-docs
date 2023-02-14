import App from './App.svelte'
import "bootstrap/dist/js/bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './app.css'

const app = new App({
  target: document.getElementById('app')
})

export default app
