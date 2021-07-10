// eslint-disable-next-line no-use-before-define
import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/api'
import { Product } from '@/types/product'
import { AxiosResponse } from 'axios'

type Products = {
  products?: Product[]
}
export const GettersContext = createContext<Products>({})

export const GettersProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<AxiosResponse<Products>>([] as any)

  const getAllProducts = async (): Promise<any> => {
    return await getProducts('products')
  }

  useEffect(() => {
    getProducts('products').then((res) => {
      setProducts(res)
    }).catch((res) => {
      // console.log(res)
    })
  }, [])

  return (
    <GettersContext.Provider value={{ products, setProducts, getAllProducts } as any}>
      {children}
    </GettersContext.Provider>
  )
}
