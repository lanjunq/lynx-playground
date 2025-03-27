import { root } from '@lynx-js/react'

import { MyScrollView } from './MyScrollView.jsx'

root.render(<MyScrollView />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
