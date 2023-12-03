/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
const OverviewPage = lazy(() => import('@/features/overview/routes/Overview'))

export const protectedRoutes = [
  {
    path: '/',
    element: <OverviewPage />
  }
]