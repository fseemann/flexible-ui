<template>
  <span
    :class="classes"
    v-bind="$attrs"
  ><slot /></span>
</template>

<script>
import useClasses from '../shared/use-classes'

export default {
  name: 'UiFormFieldDescription',
  inheritAttrs: false,
  props: {
    variant: {
      type: String,
      default: 'default'
    }
  },
  setup (props) {
    return {
      classes: useClasses('formFieldDescription', props.variant)
    }
  }
}
</script>

<style scoped>

</style>
