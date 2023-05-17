# Nuxt Anime Module

Anime module for Nuxt.

## Features

- Helps you integrate the Anime.js animation library
- Provides the main _anime_ helper globally
- Supports custom composables
- Zero-config setup ready to go
- TypeScript friendly
- Super easy to use

## Quick Start

1. Install `@hypernym/nuxt-anime` to your project

```sh
npm i -D @hypernym/nuxt-anime
```

2. Enable the module in the main config file

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-anime']
}
```

That's it! Start developing your app!

## Module

The module comes with a _zero-config_ setup so after activation it automatically adds the Anime.js core and it is globally available without additional settings.

```html
<!-- layout.vue | page.vue | component.vue -->

<template>
  <div>
    <h1 class="title">Nuxt Anime</h1>
  </div>
</template>

<script setup lang="ts">
  const { $anime } = useNuxtApp()

  onMounted(() => {
    $anime({ targets: '.title', translateX: 250, duration: 800 })
  })
</script>
```

## Options

Nuxt Anime Module is optimized and supports Nuxt 3 with TypeScript. It also improves the development experience with detailed descriptions, examples and code auto-completion.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-anime'],

  anime: {
    // Module options
  }
}
```

## Provide

- Type: `boolean`
- Default: `true`

Provides the main `$anime` helper globally.

```ts
// nuxt.config.ts

{
  anime: {
    provide: true
  }
}
```

**Available globally**

```ts
const { $anime } = useNuxtApp()

$anime({ targets: '.class', translateX: 250, duration: 800 })
```

## Composables

- Type: `boolean`
- Default: `undefined`

Specifies custom composables.

If enabled, allows the use of custom composables.

```ts
// nuxt.config.ts

{
  anime: {
    composables: true
  }
}
```

### useAnime

Provides the main `anime` function as custom composable.

```html
<script setup lang="ts">
  onMounted(() => {
    useAnime({ targets: '.class', translateX: 250, duration: 800 })
  })
</script>
```

```ts
// Explicit import (optional)
import { useAnime } from '#anime'
```

## Auto Import

- Type: `boolean`
- Default: `true`

Specifies the `auto-import` feature.

If enabled, the composables will be available globally so there is no need to import them manually.

Since this is an opinionated feature, you can disable global `auto-import` and use explicit import only where you need it.

Works only if the `composables: true` option is enabled.

```ts
// nuxt.config.ts

{
  anime: {
    autoImport: false
  }
}
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/nuxt-anime/discussions) for any additional questions.

## License

### Anime.js Library

More details about Anime.js license can be found in the <a href="https://github.com/juliangarnier/anime">official</a> repository.

### Nuxt Anime Module

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
