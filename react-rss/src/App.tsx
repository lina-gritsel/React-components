import { FC } from 'react'
import Router from './router'

import './scss/styles.scss'

const pages = import.meta.glob('./pages/*.jsx', { eager: true })
console.log(pages)

const App: FC = () => {
  return <Router />
}

export default App
