import { Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { routes } from './routes'

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default Router
