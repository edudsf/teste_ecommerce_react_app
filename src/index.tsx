import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'
import { GlobalStyle } from '@/styles/global.js'
import GlobalState from './context/global'

ReactDOM.render(
  <>
    <GlobalStyle />
    <GlobalState>
      <App />
    </GlobalState>
  </>,
  document.getElementById('root')
)
