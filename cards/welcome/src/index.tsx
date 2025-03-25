import { root } from '@lynx-js/react'

import { WelcomePage } from './WelcomePage.js'

root.render(<WelcomePage />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
