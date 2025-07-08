import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './bootstrap.min.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)
