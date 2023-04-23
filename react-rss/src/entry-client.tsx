import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

const storeApp = store()

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={storeApp}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
