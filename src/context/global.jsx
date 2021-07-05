// eslint-disable-next-line no-use-before-define
import React from 'react'
import { GettersProvider } from './getters'

const GlobalState = ({ children }) => (
  <GettersProvider>
    {children}
  </GettersProvider>
)

export default GlobalState
