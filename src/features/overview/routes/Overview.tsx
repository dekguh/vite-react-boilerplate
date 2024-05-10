import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { updateIsLogged } from '@/features/auth/stores/authSlice'

import { clearStorageJwt } from '@/utils/storage'

const Overview = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogoutClick = () => {
    clearStorageJwt()
    dispatch(updateIsLogged(false))
    navigate('/auth/sign-in')
  }

  return (
    <div>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  )
}

export default Overview