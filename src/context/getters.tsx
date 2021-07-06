// eslint-disable-next-line no-use-before-define
import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../services/api'
import { Product } from '@/types/product'
import { AxiosResponse } from 'axios'

/*
interface Product {
  id: number
  name: string
  imageURL: string
}
*/

type Products = {
  products?: Product[]
}
export const GettersContext = createContext<Products>({})

export const GettersProvider: React.FC = ({ children }) => {
  const [products, setPrdocuts] = useState<AxiosResponse<Products>>()

  useEffect(() => {
    getProducts('products').then((res) => {
      console.log(res)
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
