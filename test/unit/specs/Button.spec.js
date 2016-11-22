import Vue from 'vue'
import VueButton from 'src/components/Button.vue'

Vue.component('v-button', VueButton)

describe('Button.vue', () => {
  it('render correct default class', () => {
    const vm = new Vue({
      template: '<div><v-button>Hello</v-button></div>',
      components: { VueButton }
    }).$mount()
    expect(vm.$el.querySelector('button').className).to.equal('v-btn')
  })

  it('render correct default markup', () => {
    const vm = new Vue({
      template: '<div><v-button>Hello</v-button></div>',
      components: { VueButton }
    }).$mount()
    expect(vm.$el.querySelector('button').getAttribute('markup')).to.equal('default')
  })

  it('render correct markup', () => {
    const vm = new Vue({
      template: '<div><v-button markup="primary">Hello</v-button></div>',
      components: { VueButton }
    }).$mount()
    expect(vm.$el.querySelector('button').getAttribute('markup')).to.equal('primary')
  })

  it('render custom attribute', () => {
    const vm = new Vue({
      template: '<div><v-button large="true" disabled="true" class="test" id="test" name="test" markup="warning">Hello</v-button></div>',
      components: { VueButton }
    }).$mount()
    console.log(vm.$el.querySelector('button'))
    expect(vm.$el.querySelector('button').getAttribute('markup')).to.equal('warning')
    expect(vm.$el.querySelector('button').getAttribute('large')).to.equal('true')
    expect(vm.$el.querySelector('button').getAttribute('disabled')).to.equal('disabled')
    expect(vm.$el.querySelector('button').getAttribute('class')).to.equal('v-btn test')
    expect(vm.$el.querySelector('button').getAttribute('id')).to.equal('test')
    expect(vm.$el.querySelector('button').getAttribute('name')).to.equal('test')
  })
})
