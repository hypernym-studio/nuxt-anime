import { resolve } from 'path'
import pkg from '../package.json'

export default function nuxtAnime(moduleOptions) {
  const { nuxt, addPlugin } = this
  if (nuxt.options.animejs || nuxt.options.animejs === undefined) {
    addPlugin({
      src: resolve(__dirname, '../templates/plugin.js'),
      fileName: 'animejsModule.js'
    })
  }
}

export { pkg as meta }
