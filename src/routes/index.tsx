import { useRoutes } from 'react-router-dom'

// COMPONENTS
import { publicRoutes } from './public'
import { protectedRoutes } from './protected'

// REDUX
import { useSelector } from 'react-redux'
import { authSelect } from '@/features/auth/stores/authSlice'
import useAuth from '@/hooks/useAuth'

const AppRoutes = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authentication = useAuth()
  const authState = useSelector(authSelect)

  const element = useRoutes(authState?.isLoggedIn ? protectedRoutes : publicRoutes)

  return element
}

export default AppRoutes