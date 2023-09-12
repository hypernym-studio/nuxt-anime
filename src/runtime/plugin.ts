import { defineNuxtPlugin, Plugin } from '#app'
import anime from 'animejs'

const plugin: Plugin<{
  anime: typeof anime
}> = defineNuxtPlugin(() => ({
  provide: { anime },
}))

export default plugin
