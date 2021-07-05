// eslint-disable-next-line no-use-before-define
import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/api'

type Products = {
  products?: []
}

export const GettersContext = createContext<Products>({})

export const GettersProvider: React.FC = ({ children }) => {
  const [products, setPrdocuts] = useState<any>()

  useEffect(() => {
    getProducts('products').then((res) => {
      setPrdocuts(res)
    }).catch((res) => {
      // console.log(res)
    })
  }, [])

  return (
    <GettersContext.Provider value={{ products } as any}>
      {children}
    </GettersContext.Provider>
  )
}
