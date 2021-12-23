import { UiThemeProvider, UiSelectAutocomplete } from './index'

export default {
  component: UiSelectAutocomplete,
  title: 'Ui/SelectAutocomplete'
}

export const withoutTheme = () => ({
  components: { UiThemeProvider, UiSelectAutocomplete },
  data () {
    return {
      value: '',
      filter: '',
      options: [
        { value: 1, label: 'Germany' },
        { value: 2, label: 'China' },
        { value: 3, label: 'Poland' },
        { value: 4, label: 'Japan' },
        { value: 5, label: 'Sweden' },
      ]
    }
  },
  computed: {
    filteredOptions () {
      return this.options.filter(it => it.label.includes(this.filter))
    }
  },
  template: `
    <ui-theme-provider>
      <ui-select-autocomplete placeholder="Search countries" v-model="value" :options="filteredOptions" @filter="filter = $event" />
    </ui-theme-provider>
  `
})
