import { root } from '@lynx-js/react'

import { EveningRoutine } from './EveningRoutine.jsx'

root.render(<EveningRoutine />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
