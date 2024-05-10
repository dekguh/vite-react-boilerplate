/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { authSelect, updateIsLogged } from '@/features/auth/stores/authSlice'

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