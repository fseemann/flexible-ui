import * as components from './components'

const FlexibleUi = {
  install (app) {
    for (const component in components) {
      app.component(component.name, component)
    }
  }
}

export default FlexibleUi
