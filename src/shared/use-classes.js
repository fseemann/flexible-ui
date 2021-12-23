import { inject } from 'vue'

/**
 * @param {string} name
 * @param {string} variant
 * @returns {string}
 */
export default (name, variant) => {
  const theme = inject('theme')
  const themeElement = theme[name]

  if (themeElement == null) {
    console.warn(`Component '${name}' not found in theme.`)
    return ''
  }

  if (typeof themeElement !== 'object') {
    console.warn(`Theme component '${name}' has to be an object.`)
    return ''
  }

  const classes = themeElement[variant]
  if (classes == null) {
    console.warn(`Theme classes '${name}' with variant ${variant} are null.`)
    return ''
  }

  return classes
}
