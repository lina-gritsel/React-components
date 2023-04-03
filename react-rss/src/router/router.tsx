import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { routes } from './routes'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
