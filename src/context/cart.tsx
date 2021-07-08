import React, { createContext, useState, useEffect } from 'react'
import { Product } from '@/types/product'
import { Cart } from '@/types/cart'

export const CartContext = createContext([] as any)

const CartProvider: React.FC = ({ children }) => {
  const get_local = JSON.parse(localStorage.getItem('CartNexfar'))

  const [cart, setCart] = useState([])

  useEffect(() => {
    if (get_local !== null) {
      setCart([...get_local])
    }
  }, [])

  const addItem = (item: Product): boolean => {
    const cart_product: Cart = {
      product: item,
      quantity: 1
    }
    if (cart.length !== 0) {
      for (const value of cart) {
        if (value.product.id === item.id) {
          value.quantity++
          setCart([...cart])
          setItem(cart)
          return false
        }
      }
    }
    setCart([...cart, cart_product])
    setItem(cart)
  }

  const totalPrice = (): number => {
    let total: number = 0
    let totalAll: number = 0
    for (const value of cart) {
      total = value.quantity * value.product.price.price
      totalAll += total
    }

    return Number(totalAll.toFixed(2))
  }

  const deleteItem = (item: Product): void => {
    console.log('deleteItem')
  }

  const setItem = (item): void => {
    localStorage.setItem('CartNexfar', JSON.stringify(item))
  }

  return (
    <CartContext.Provider value={{ addItem, deleteItem, cart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
