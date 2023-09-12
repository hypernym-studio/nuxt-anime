import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addImports,
} from '@nuxt/kit'
import { name, version, configKey, compatibility } from './meta'
import type { ModuleOptions } from './types/module'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey,
    compatibility,
  },

  defaults: {
    provide: true,
    autoImport: true,
  },

  setup(options, nuxt) {
    const { provide, composables, autoImport } = options

    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const composablesImport = resolve('./runtime/composables')

    if (provide) addPlugin(resolve('./runtime/plugin'))
    if (composables) nuxt.options.alias[`#${configKey}`] = composablesImport
    if (autoImport && composables)
      addImports([{ name: 'useAnime', from: composablesImport }])
  },
})
