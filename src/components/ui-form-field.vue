<template>
  <div :class="classes">
    <ui-form-field-label :for="inputId">
      {{ label }}
    </ui-form-field-label>
    <slot v-bind="{ id: inputId, 'aria-describedby': descriptionId}" />
    <ui-form-field-description :id="descriptionId">
      {{ description }}
    </ui-form-field-description>
  </div>
</template>

<script>
import createId from '../shared/create-id'
import UiFormFieldLabel from './ui-form-field-label'
import UiFormFieldDescription from './ui-form-field-description'
import useClasses from '../shared/use-classes'

export default {
  name: 'UiFormField',
  components: { UiFormFieldDescription, UiFormFieldLabel },
  props: {
    inputId: {
      type: String,
      default () {
        return createId()
      }
    },
    descriptionId: {
      type: String,
      default () {
        return createId()
      }
    },
    label: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    }
  },
  setup (props) {
    return {
      classes: useClasses('formField', props.variant)
    }
  }
}
</script>

<style scoped>

</style>
