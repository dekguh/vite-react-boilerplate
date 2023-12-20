import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// REDUX
import { useDispatch } from 'react-redux'
import { updateIsLogged } from '@/features/auth/stores/authSlice'

// UTILS
import { getStorageJwt } from '@/utils/storage'

const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const jwtToken = getStorageJwt()
    
    if (jwtToken) {
      setIsLogged(true)
      dispatch(updateIsLogged(true))
    }
    else {
      setIsLogged(false)
      dispatch(updateIsLogged(false))
      navigate('/auth/sign-in')
    }
  }, [])

  return isLogged
}

export default useAuth