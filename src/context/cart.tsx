import React, { createContext, useState } from 'react'
import { Cart } from '@/types/cart'

export const CartContext = createContext({})

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>()
  console.log(cart, setCart)
  const addItem = (item: any[]): void => {
    console.log('addItem')
  }

  const deleteItem = (item: any[]): void => {
    console.log('deleteItem')
  }

  return (
    <CartContext.Provider value={{ addItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
