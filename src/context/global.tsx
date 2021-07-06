// eslint-disable-next-line no-use-before-define
import React from 'react'
import CartProvider from './cart'
import { GettersProvider } from './getters'

const GlobalState = ({ children }): any => (
  <GettersProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </GettersProvider>
)

export default GlobalState
