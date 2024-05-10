import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { store } from '@/stores/storeGlobal'

import { ErrorBoundary } from 'react-error-boundary'

interface IAppProviderProps {
  children: React.ReactElement
}

const AppProvider : React.FC<IAppProviderProps> = (props) => {
  const { children } = props
  
  return (
    <React.Suspense fallback={<>loading</>}>
      <ErrorBoundary FallbackComponent={() =><>error</>}>
        <Provider store={store}>
          <Router>
            {children}
          </Router>
        </Provider>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default AppProvider