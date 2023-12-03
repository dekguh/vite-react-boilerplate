import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

interface IAppProviderProps {
  children: React.ReactElement
}

const AppProvider : React.FC<IAppProviderProps> = (props) => {
  const { children } = props
  return (
    <Router>
      {children}
    </Router>
  )
}

export default AppProvider