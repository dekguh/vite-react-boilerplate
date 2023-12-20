import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// REDUX
import { useDispatch } from 'react-redux'
import { authSelect, updateIsLogged } from '@/features/auth/stores/authSlice'

// UTILS
import { getStorageJwt } from '@/utils/storage'

const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const jwtToken = getStorageJwt()
    
    if (jwtToken) {
      dispatch(updateIsLogged(true))
    }
    else {
      dispatch(updateIsLogged(false))
      if (!location.pathname.includes('/auth')) navigate('/auth/sign-in')
    }
  }, [])

  return authSelect
}

export default useAuth