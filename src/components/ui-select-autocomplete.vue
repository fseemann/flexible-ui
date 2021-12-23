<template>
  <div
    ref="el"
    :class="classesContainer"
    @keydown.esc.prevent="hideMenu"
    @keydown.arrow-down="selectNext"
    @keydown.arrow-up="selectPrevious"
  >
    <input
      :class="classes"
      :value="displayValue"
      type="search"
      v-bind="$attrs"
      @input="emitFilter"
      @focus="showMenu"
      @blur="handleBlur"
    >
    <ol
      v-show="menuShown"
      ref="elList"
      :class="classesMenu"
    >
      <li
        v-for="option in options"
        :key="option.key"
      >
        <button
          :class="classesMenuItem"
          tabindex="-1"
          type="button"
          @blur="handleBlur"
          @click="emitInput(option)"
        >
          {{ option.label }}
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import { ref, toRefs, watch } from 'vue'
import useClasses from '../shared/use-classes'

export default {
  name: 'UiSelectAutocomplete',
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
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
    filter: null,
  },
  setup (props, { emit }) {
    const { modelValue, options } = toRefs(props)
    const el = ref(null)
    const menuShown = ref(false)
    const displayValue = ref('')

    const elList = ref(null)
    const selectedIndex = ref(null)

    watch([modelValue, options], ([newModelValue, newOptions]) => {
      if (newOptions.length === 0) {
        menuShown.value = false
      }

      if (!newModelValue) {
        return
      }
      displayValue.value = (newOptions.find(it => it.value === newModelValue) || { label: ''}).label
    })

    watch(selectedIndex, (newSelectedIndex) => {
      if (newSelectedIndex != null) {
        menuShown.value = true
        elList.value.children[selectedIndex.value].firstChild.focus()
      }
    })

    watch(menuShown, (newMenuShown) => {
      if (newMenuShown === false) {
        selectedIndex.value = null
      }
    })

    const selectNext = () => {
      if (selectedIndex.value == null) {
        selectedIndex.value = 0
      } else {
        selectedIndex.value = (selectedIndex.value + 1) < options.value.length ? selectedIndex.value + 1 : selectedIndex.value
      }
    }

    const selectPrevious = () => {
      if (selectedIndex.value == null) {
        selectedIndex.value = 0
      } else {
        selectedIndex.value = selectedIndex.value > 0 ? selectedIndex.value - 1 : selectedIndex.value
      }
    }

    const emitFilter = (event) => {
      const filter = event.target.value
      displayValue.value = filter
      menuShown.value = true
      emit('update:modelValue', '')
      emit('filter', filter)
    }
    const emitInput = (option) => {
      menuShown.value = false
      emit('update:modelValue', option.value)
    }
    const handleBlur = (event) => {
      if (!el.value.contains(event.relatedTarget)) {
        menuShown.value = false
      }
    }
    const showMenu = () => menuShown.value = true
    const hideMenu = () => menuShown.value = false


    return {
      el,
      elList,
      selectNext,
      selectPrevious,
      menuShown,
      displayValue,
      emitFilter,
      emitInput,
      handleBlur,
      showMenu,
      hideMenu,
      classes: useClasses('selectAutocomplete', props.variant),
      classesContainer: useClasses('selectAutocompleteContainer', props.variant),
      classesMenu: useClasses('selectAutocompleteMenu', props.variant),
      classesMenuItem: useClasses('selectAutocompleteMenuItem', props.variant),
    }
  }
}
</script>

<style scoped>

</style>
