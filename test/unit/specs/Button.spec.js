import Vue from 'vue'
import VueButton from 'src/components/Button.vue'

Vue.component('v-button', VueButton)

describe('Button.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><v-button>Hello</v-button></div>',
      components: { VueButton }
    }).$mount()
    expect(vm.$el.querySelector('.v-btn')).to.exist
  })
})
