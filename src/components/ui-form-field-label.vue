<template>
  <label
    :class="classes"
    v-bind="$attrs"
  ><slot /></label>
</template>

<script>
import useClasses from '../shared/use-classes'

export default {
  name: 'UiFormFieldLabel',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  setup (props) {
    return {
      classes: useClasses('formFieldLabel', props.variant)
    }
  }
}
</script>

<style scoped>

</style>
