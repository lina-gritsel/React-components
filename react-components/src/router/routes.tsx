import React from 'react'

import { PATHS } from './patch'
import HomePage from '../pages/HomePage'
import AboutUsPage from '../pages/AboutUsPage'
import Page404 from '../pages/404Page/404Page'

interface Routes {
  path: string
  component: typeof React.Component
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
    path: PATHS.PAGE_404,
    component: Page404,
  },
]
