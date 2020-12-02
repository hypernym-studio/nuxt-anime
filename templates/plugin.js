import Vue from 'vue'
import anime from 'animejs'

Vue.directive('anime', (el, binding) => {
  let options = { targets: el, ...binding.value }
  const modifiers = binding.modifiers

  anime(options)

  if (modifiers.set) {
    options = { ...binding.value }
    anime.set(el, options)
  }
})

Vue.prototype.$anime = anime
