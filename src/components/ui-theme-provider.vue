<template>
  <slot />
</template>

<script>
import defaultTheme from '../themes/default.js'

export default {
  name: 'ThemeProvider',
  provide () {
    return {
      theme: this.theme
    }
  },
  props: {
    theme: {
      type: Object,
      default () {
        return defaultTheme
      }
    },
  },
}
</script>

<style scoped>

</style>
