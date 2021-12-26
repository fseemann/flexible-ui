import * as components from './components'

const FlexibleUi = {
  install (app) {
    const nameByComponent = Object.entries(components)
    for (const [name, component] of nameByComponent) {
      app.component(name, component)
    }
  }
}

export default FlexibleUi
