<template>
  <form :class="classes">
    <slot />
  </form>
</template>

<script>
import useClasses from '../shared/use-classes'

export default {
  name: 'UiForm',
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  setup (props) {
    return {
      classes: useClasses('form', props.variant)
    }
  }
}
</script>

<style scoped>

</style>
