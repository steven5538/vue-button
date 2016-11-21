import Vue from 'vue'
import VueButton from './components/Button.vue'

Vue.component('v-button', VueButton)

Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<div><v-button markup="warning">Hello</v-button><br/><br/><v-button>Hello</v-button></div>',
  components: { VueButton }
})
