import { Plugin } from '#app'
import anime from 'animejs'

declare const plugin: Plugin<{
  anime: typeof anime
}>

export default plugin
