import { root } from '@lynx-js/react'

import { MorningRoutine } from './MorningRoutine.jsx'

root.render(<MorningRoutine />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
