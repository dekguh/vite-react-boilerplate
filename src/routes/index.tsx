import { useRoutes } from 'react-router-dom'

// COMPONENTS
import { publicRoutes } from './public'
import { protectedRoutes } from './protected'

const AppRoutes = () => {
  const element = useRoutes([...publicRoutes,...protectedRoutes])

  return element
}

export default AppRoutes