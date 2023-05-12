import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addImports
} from '@nuxt/kit'
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

    // add plugin that provides `$anime` function to nuxt app instance
    addPlugin(resolve('./runtime/plugin'))

    // add useAnime composable
    addImports({
      from: 'animejs/lib/anime.es.js',
      as: 'useAnime',
      name: 'default'
    })
  }
})
