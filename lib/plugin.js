import Vue from 'vue'
import anime from 'animejs'

Vue.directive('anime', (el, binding) => {
  const options = { targets: el, ...binding.value }
  anime(options)
})

Vue.prototype.$anime = anime
