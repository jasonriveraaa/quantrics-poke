import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/PokeCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'

const app = createApp(App)
app.mount('#app')

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)
