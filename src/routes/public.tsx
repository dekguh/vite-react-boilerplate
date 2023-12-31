/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'
const AuthRoutes = lazy(() => import('@/features/auth/routes'))

export const publicRoutes = [
  {
    path: 'auth/*',
    element: <AuthRoutes />
  },
  {
    path: '/',
    element: <></>
  }
]