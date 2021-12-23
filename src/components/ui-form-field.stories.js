import { UiFormField, UiInput, UiThemeProvider } from './index'

export default {
  component: UiFormField,
  title: 'Ui/FormField'
}

export const withoutTheme = () => ({
  components: { UiThemeProvider, UiFormField, UiInput },
  template: `
    <ui-theme-provider>
      <ui-form-field label="Text" description="A form field with a text input" v-slot="props">
        <ui-input v-bind="props" placeholder="Enter something..." type="text" />
      </ui-form-field>
    </ui-theme-provider>
  `
})
