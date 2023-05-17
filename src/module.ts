import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addImports
} from '@nuxt/kit'
import { name, version, configKey } from '../package.json'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    provide: true,
    autoImport: true
  },

  setup(options, nuxt) {
    const { provide, composables, autoImport } = options

    const { resolve } = createResolver(import.meta.url)
    const composablesImport = resolve('./runtime/composables')
    nuxt.options.build.transpile.push(resolve('./runtime'))

    if (provide) addPlugin(resolve('./runtime/plugin'))
    if (composables) nuxt.options.alias['#anime'] = composablesImport
    if (autoImport && composables)
      addImports([{ name: 'useAnime', from: composablesImport }])
  }
})
