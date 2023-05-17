import anime from 'animejs'

/**
 * Provides the main `anime` function as custom composable.
 *
 * @example
 *
 * ```ts
 * useAnime({ targets: '.class', translateX: 250, duration: 800 })
 * ```
 *
 * @example
 *
 * ```ts
 * // Explicit import (optional)
 * import { useAnime } from '#anime'
 * ```
 *
 * @since 2.1.0
 */
export const useAnime: typeof anime = anime
