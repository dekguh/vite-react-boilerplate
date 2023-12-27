import { setStorageJwt } from '@/utils/storage'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateIsLogged } from '../stores/authSlice'

export const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLoginClick = () => {
    setStorageJwt('logged')
    dispatch(updateIsLogged(true))
    navigate('/')
  }

  return (
    <div>
      <button data-testid='btnLoginId' onClick={handleLoginClick}>login</button>
    </div>
  )
}