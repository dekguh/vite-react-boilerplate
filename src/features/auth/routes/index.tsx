import { Routes, Route } from 'react-router-dom'

// COMPONENTS
import { SignIn } from './SignIn'
import { SignUp } from './SignUp'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='sign-in' element={<SignIn />} />
      <Route path='sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default AuthRoutes