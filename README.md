<p align="center">
    <img src=".github/assets/cover.svg" >
</p>

<h1>Nuxt Animejs Module</h1>

Anime.js module for Nuxt.js

## Features

- Helps you integrate `Anime.js` javascript animation library
- Allows you to easily animate elements via custom `v-anime` directive 🔥
- Provides a solution for global use via `this.$anime`
- `Zero-config` setup ready for development 🚀

## Quick Start

1. Add `nuxt-animejs` dependency to your project

```bash
$ npm install --save-dev nuxt-animejs # or yarn add --dev nuxt-animejs
```

2. Add `nuxt-animejs` to the `buildModules` section of `nuxt.config.js`

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-animejs']
}
```

That's it! Start developing your app ✨

## Examples

💻 Here are some code examples

[Page Transitions](https://codesandbox.io/s/example-nuxt-animejs-basic-zdgey)

**Custom directive: `v-anime`**

```html
<!-- index.vue -->

<template>
  <h1
    v-anime="{
        rotate: 360,
        backgroundColor: ['#2f495e', '#00c58e'],
        duration: 3000,
        loop: true,
      }"
  >
    NUXT ANIMEJS
  </h1>
</template>
```

**Custom modifier: `v-anime.set`**

```html
<!-- index.vue -->

<template>
  <h2
    v-anime.set="{
        color: '#2f495e',
        backgroundColor: '#00c58e',
      }"
  >
    NUXT ANIMEJS
  </h2>
</template>
```

[More info](https://animejs.com/documentation/#set)

**Hello world**

```js
// index.vue

export default {
  mounted() {
    this.helloWorld()
  },

  methods: {
    helloWorld() {
      const anime = this.$anime

      anime({
        targets: '.element',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
      })
    }
  }
}
```

**Animate element on click**

```html
<!-- index.vue -->

<template>
  <div>
    <button @click="animeEl">Click me</button>
    <p class="p1">Nuxt Animejs Module</p>
  </div>
</template>
```

```js
// index.vue

export default {
  methods: {
    animeEl() {
      this.$anime({
        targets: '.p1',
        translateX: 250,
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 800
      })
    }
  }
}
```

**Nuxt global page transitions**

```js
// nuxt.config.js

{
  // Enable module
  buildModules: ['nuxt-animejs'],

  // Add global page transition
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done
      })
    }
  }
}
```

## Options

**Default options**

```js
// nuxt.config.js

{
  animejs: true,
}
```

### `animejs`

- Default: `true`

✅ Anime.js is enabled by default so there is no need for additional configuration.

```js
// nuxt.config.js

{
  buildModules: ['nuxt-animejs'],

  // If you want to disable Anime.js, set option to 'false'
  // This is useful for quick tests
  animejs: false
}
```

**Available globally**

```js
// Access Anime.js by using
this.$anime

// or
const anime = this.$anime

anime({
  /* ... */
})
```

**Use in templates**

```html
<div v-anime="{ /* ... */ }"></div>
```

```html
<div v-anime.set="{ /* ... */ }"></div>
```

[More info](https://animejs.com/documentation/)

## License

**Anime.js**

[MIT License](https://github.com/juliangarnier/anime/blob/master/LICENSE.md)

Copyright (c) Julian Garnier

**Nuxt Animejs Module**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
