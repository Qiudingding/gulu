import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input',Input)
new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: true,
    message:'hi'
  },
  methods: {
    inputChange:function(e){
      console.log(e)
    }
  }
})

