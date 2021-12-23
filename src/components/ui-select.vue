<template>
  <span :class="classesContainer">
    <select
      :class="classes"
      v-bind="$attrs"
      :value="modelValue"
      @input="emitValue"
    >
      <slot />
    </select>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="classesIcon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </span>
</template>

<script>
import useClasses from '../shared/use-classes'

export default {
  name: 'UiSelect',
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
      classes: useClasses('select', props.variant),
      classesIcon: useClasses('selectIcon', props.variant),
      classesContainer: useClasses('selectContainer', props.variant),
      emitValue
    }
  }
}
</script>

<style scoped>

</style>
