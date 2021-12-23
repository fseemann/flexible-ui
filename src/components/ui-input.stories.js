import { UiInput, UiThemeProvider } from './index'

export default {
  component: UiInput,
  title: 'Ui/Input'
}

export const withoutTheme = () => ({
  components: { UiThemeProvider, UiInput },
  data () {
    return {
      input: ''
    }
  },
  template: `
    <ui-theme-provider>
      <ui-input placeholder="Enter something..." type="text" v-model="input" />
    </ui-theme-provider>
  `
})
