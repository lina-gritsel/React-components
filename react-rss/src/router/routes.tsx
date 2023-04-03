import { FC } from 'react'

import { PATHS } from './patch'
import AboutUsPage from '../pages/AboutUsPage'
import FormsPage from '../pages/FormsPage'
import HomePage from '../pages/HomePage'
import Page404 from '../pages/404Page'

interface Routes {
  path: string
  component: FC
}

export const routes: Routes[] = [
  {
    path: PATHS.HOME,
    component: HomePage,
  },
  {
    path: PATHS.ABOUT,
    component: AboutUsPage,
  },
  {
    path: PATHS.FORMS,
    component: FormsPage,
  },
  {
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
