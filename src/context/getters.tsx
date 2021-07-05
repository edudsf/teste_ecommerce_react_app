// eslint-disable-next-line no-use-before-define
import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/api'

interface Product {
  id: number
  name: string
  imageURL: string
}

type Products = {
  products?: Product[]
}

export const GettersContext = createContext<Products>({
  products: []
})

export const GettersProvider: React.FC = ({ children }) => {
  const [products, setPrdocuts] = useState<Products>()

  useEffect(() => {
    getProducts('products').then((res) => {
      console.log(res)
      setPrdocuts(res as Products)
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
