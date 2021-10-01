import Vue from 'vue'
import anime from 'animejs'

Vue.directive('anime', (el, binding) => {
  anime({ targets: el, ...binding.value })

  if (binding.modifiers.set) {
    anime.set(el, { ...binding.value })
  }
})

export default ({ app }, inject) => {
  inject('anime', anime)
}