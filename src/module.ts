import { defineNuxtModule, createResolver, addPlugin } from '@nuxt/kit'
import { name, version } from '../package.json'

export default defineNuxtModule({
  meta: {
    name,
    version,
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    addPlugin(resolve('./runtime/plugin'))
  }
})
