# Nuxt Anime Module

Anime module for Nuxt.

## Features

- Helps you integrate the Anime.js animation library
- Provides a solution for global use
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

Nuxt Anime Module is completely rewritten in TypeScript. It also improves the development experience with detailed descriptions, examples and code auto-completion.

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

The module currently has no additional options because they are not needed.

### Anime Core

- Default: `true`

Anime core is enabled by default on module activation.

```ts
// nuxt.config.ts

{
  modules: ['@hypernym/nuxt-anime'],
}
```

**Available globally**

```ts
// Access Anime by using
const { $anime } = useNuxtApp()

$anime({ targets: '.title', translateX: 250, duration: 800 })
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
