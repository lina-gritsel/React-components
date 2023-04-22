import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux'

import store from './store/store'
import App from './App'

const storeApp = store()

export const render = (url: string, options?: object) => {
  return renderToPipeableStream(
    <Provider store={storeApp}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  )
}
