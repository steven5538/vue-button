import Vue from 'vue'
import VueButton from './components/Button.vue'

Vue.component('v-button', VueButton)

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<v-button>Hello</v-button>',
  components: { VueButton }
})
