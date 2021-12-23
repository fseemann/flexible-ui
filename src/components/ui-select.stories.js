import { UiThemeProvider, UiSelect } from './index'

export default {
  component: UiSelect,
  title: 'Ui/Select'
}

export const withoutTheme = () => ({
  components: { UiThemeProvider, UiSelect },
  data () {
    return {
      gender: ''
    }
  },
  template: `
    <ui-theme-provider>
      <ui-select v-model="gender">
        <option value="">-- Select gender --</option>
        <option value="1">Female</option>
        <option value="2">Male</option>
      </ui-select>
    </ui-theme-provider>
  `
})
