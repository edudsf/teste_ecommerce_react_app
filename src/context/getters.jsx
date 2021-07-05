// eslint-disable-next-line no-use-before-define
import React, { createContext, useState } from 'react'
import { getProducts } from '../services/api'

export const GettersContext = createContext([])

export const GettersProvider = ({ children }) => {
  const [products, setPrdocuts] = useState([])

  getProducts('products').then((res) => {
    setPrdocuts(res)
  })

  return (
    <GettersContext.Provider value={{ products }}>
      {children}
    </GettersContext.Provider>
  )
}
