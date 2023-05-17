import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addImports
} from '@nuxt/kit'
import { name, version } from '../package.json'
import { type NuxtModule } from 'nuxt/schema'

export interface AnimeModuleOptions {
  composable: false
}

export default defineNuxtModule<AnimeModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'anime',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  defaults: {
    composable: false
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    // add useAnime composable if user opts in
    if (nuxt.options.anime?.composable || options.composable) {
      addImports({
        from: 'animejs/lib/anime.es.js',
        as: 'useAnime',
        name: 'default'
      })
    } else {
      // add plugin that provides `$anime` function to nuxt app instance
      // Only add this if the user opts out of the composable
      addPlugin(resolve('./runtime/plugin'))
    }
  }
}) satisfies NuxtModule<AnimeModuleOptions>
