import { useRoutes } from 'react-router-dom'

// COMPONENTS
import { publicRoutes } from './public'
import { protectedRoutes } from './protected'

// REDUX
import { useSelector } from 'react-redux'
import useAuth from '@/hooks/useAuth'

const AppRoutes = () => {
  const authentication = useAuth()
  const authState = useSelector(authentication)

  const element = useRoutes(authState?.isLoggedIn ? protectedRoutes : publicRoutes)

  return element
}

export default AppRoutes