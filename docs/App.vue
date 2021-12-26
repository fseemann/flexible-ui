<template>
  <div>
    <h1>Flexible Ui</h1>
    <ui-theme-provider>
      <ui-form>
        <ui-form-field
          v-slot="props"
          label="Name"
          :description="`Model value: ${name}`"
        >
          <ui-input
            v-model="name"
            v-bind="props"
          />
        </ui-form-field>
      </ui-form>
    </ui-theme-provider>
  </div>
</template>

<script>
import UiFormField from '../src/components/ui-form-field'
import UiForm from '../src/components/ui-form'
import UiThemeProvider from '../src/components/ui-theme-provider'
import UiInput from '../src/components/ui-input'
import { ref } from 'vue'

export default {
  name: 'App',
  components: { UiInput, UiThemeProvider, UiForm, UiFormField },
  setup () {
    return {
      name: ref('')
    }
  }
}
</script>

<style scoped>

</style>
