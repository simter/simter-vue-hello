import hello from '../src/st-hello.vue'

window.onload = function () {
  Vue.component('st-hello', hello)

  new Vue({
    el: "#demo"
  })
}