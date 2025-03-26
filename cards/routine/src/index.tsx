import { root } from '@lynx-js/react'

import { Routine } from './Routine.jsx'

root.render(<Routine />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
