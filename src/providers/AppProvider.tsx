import { store } from '@/stores/storeGlobal'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

interface IAppProviderProps {
  children: React.ReactElement
}

const AppProvider : React.FC<IAppProviderProps> = (props) => {
  const { children } = props
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  )
}

export default AppProvider