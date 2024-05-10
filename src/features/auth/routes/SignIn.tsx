import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setStorageJwt } from '@/utils/storage'

import { updateIsLogged } from '../stores/authSlice'
import { usePostSignInMutation } from '../api/authApi'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [signInUser] = usePostSignInMutation()

  const handleLoginClick = async () => {
    try {
      const response = await signInUser({
        'email': 'eve.holt@reqres.in',
        'password': 'cityslicka'
      }).unwrap()
  
      setStorageJwt(response?.token)
      dispatch(updateIsLogged(true))
      navigate('/')
    } catch (error) {
      // handle error
    }
  }

  return (
    <div>
      <button data-testid='btnLoginId' onClick={() => handleLoginClick()}>login</button>
    </div>
  )
}