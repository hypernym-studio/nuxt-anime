<h1 align="center">Nuxt Animejs</h1>

<p align="center">Anime.js module for Nuxt.</p>

<h6 align="center">Currently compatible with Nuxt 2. <a href="https://github.com/ivodolenc/nuxt-animejs/discussions/10">More info →</a></h6>

## Features

- Helps you integrate `Anime.js` javascript animation library
- Allows you to easily animate elements via custom `v-anime` directive 🔥
- Provides a solution for global use via `this.$anime` 🤩
- `Zero-config` setup ready to go 🚀

## Quick Start

1. Install `nuxt-animejs` dependency to your project

```bash
$ npm install --save-dev nuxt-animejs # or yarn add -D nuxt-animejs
```

2. Enable `nuxt-animejs` in the `buildModules` section

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-animejs']
}
```

That's it! Start developing your app!

## Examples

Here are some code examples

- [Basic](https://github.com/ivodolenc/nuxt-animejs/tree/master/examples/basic)
- [Custom Directive](https://github.com/ivodolenc/nuxt-animejs/tree/master/examples/custom-directive)
- [Page Transitions](https://codesandbox.io/s/example-nuxt-animejs-basic-zdgey)
- [Staggering](https://github.com/ivodolenc/nuxt-animejs/tree/master/examples/staggering)

### Simple animation

```html
<!-- index.vue -->

<template>
  <div>
    <h1 class="title">Hello World</h1>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.setAnimation()
    },

    methods: {
      setAnimation() {
        this.$anime({
          targets: '.title',
          translateX: 250,
          rotate: '1turn',
          backgroundColor: '#FFF',
          duration: 800
        })
      }
    }
  }
</script>
```

### Custom directive

```html
<!-- index.vue -->

<template>
  <div>
    <h1 v-anime="rotate">NUXT ANIMEJS</h1>
    <p v-anime.set="translate">NUXT ANIMEJS</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        rotate: {
          rotate: 360,
          backgroundColor: ['#2f495e', '#00c58e'],
          duration: 3000,
          loop: true
        },
        translate: {
          translateY: 250,
          duration: 3300
        }
      }
    }
  }
</script>
```

### Animate element on click

```html
<!-- index.vue -->

<template>
  <div>
    <button @click="animeEl">Click me</button>
    <p class="p1">Nuxt Animejs Module</p>
  </div>
</template>

<script>
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
</script>
```

### Nuxt global page transitions

```js
// nuxt.config.js

{
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

## Custom Directive

Module allows you to easily animate elements via custom `v-anime` directive and its modifiers.

### anime()

- Directive: **`v-anime`**
- Default: `true`

```html
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

[More info](https://animejs.com/documentation/)

### anime.set()

- Modifier: **`v-anime.set`**
- Default: `true`

```html
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

## Module Options

Here are all the `default` options that can be used for customization:

```js
// nuxt.config.js

export default {
  animejs: true
}
```

### $anime

- Default: `true`

Anime.js is `enabled` by default so there is no need for additional configuration.

```js
// nuxt.config.js

export default {
  buildModules: ['nuxt-animejs'],

  /**
   * If you want to disable Anime.js, set it to 'false'
   * This is useful for quick tests
   */
  animejs: false
}
```

**Available globally**

```js
// Access Anime by using
this.$anime

// or
const anime = this.$anime

anime({
  targets: '.p1',
  translateX: 250,
  duration: 800
})
```

## License

**Anime.js**

[MIT License](https://github.com/juliangarnier/anime/blob/master/LICENSE.md)

Copyright (c) Julian Garnier

**Nuxt Animejs Module**

[MIT License](LICENSE)

Copyright (c) Ivo Dolenc
