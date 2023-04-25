import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

import './scss/styles.scss'

const storeApp = store()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={storeApp}>
      <App />
    </Provider>
  </React.StrictMode>
)
