/**
 * Module Options
 *
 * @since 2.1.0
 */
export interface ModuleOptions {
  /**
   * Provides the main `$anime` helper globally.
   *
   * @example
   *
   * ```ts
   * const { $anime } = useNuxtApp()
   *
   * $anime({ targets: '.class', translateX: 250, duration: 800 })
   * ```
   *
   * @default true
   *
   * @since 2.1.0
   */
  provide?: boolean
  /**
   * Specifies custom composables.
   *
   * If enabled, allows the use of custom composables.
   *
   * @default undefined
   *
   * @since 2.1.0
   */
  composables?: boolean
  /**
   * Specifies the `auto-import` feature.
   *
   * If enabled, the composables will be available globally so there is no need to import them manually.
   *
   * Since this is an opinionated feature, you can disable global `auto-import` and use explicit import only where you need it.
   *
   * @note Works only if the `composables: true` option is enabled.
   *
   * @default true
   *
   * @since 2.1.0
   */
  autoImport?: boolean
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt Anime Module
     *
     * Anime module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-anime)
     */
    anime?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt Anime Module
     *
     * Anime module for Nuxt.
     *
     * @see [Repository](https://github.com/hypernym-studio/nuxt-anime)
     */
    anime?: ModuleOptions
  }
}
