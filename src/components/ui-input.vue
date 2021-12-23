<template>
  <input
    :class="classes"
    v-bind="$attrs"
    :value="modelValue"
    @input="emitValue"
  >
</template>

<script>
import useClasses from '../shared/use-classes'

export default {
  name: 'UiInput',
  inject: ['theme'],
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    }
  },
  emits: {
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const emitValue = (event) => {
      emit('update:modelValue', event.target.value)
    }

    return {
      classes: useClasses('input', props.variant),
      emitValue
    }
  }
}

</script>

<style scoped>

</style>
