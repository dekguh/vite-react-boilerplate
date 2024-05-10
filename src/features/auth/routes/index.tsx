import { Routes, Route } from 'react-router-dom'

import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<SignIn />} path='sign-in' />
      <Route element={<SignUp />} path='sign-up' />
    </Routes>
  )
}

export default AuthRoutes