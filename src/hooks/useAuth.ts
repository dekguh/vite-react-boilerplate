/* eslint-disable react-hooks/exhaustive-deps */
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

  const handleAuth = () => {
    const jwtToken = getStorageJwt()
    
    if (jwtToken) {
      dispatch(updateIsLogged(true))
    }
    else {
      dispatch(updateIsLogged(false))
      if (!location.pathname.includes('/auth')) navigate('/auth/sign-in')
    }
  }

  useEffect(() => {
    handleAuth()
  }, [])

  return authSelect
}

export default useAuth