import { createApp } from 'vue'
import App from "./App.vue"
window.ctx = new AudioContext()

const respone = await fetch("src/assets/Basic 808 Kick.wav")
var raw_buffer = await respone.arrayBuffer()
const decoded_buffer = await window.ctx.decodeAudioData(raw_buffer)
window.kick_buffer = decoded_buffer
console.log(kick_buffer);

window.tick_index = 0

createApp(App).mount('#app')
