import axios, { AxiosResponse } from 'axios'
import { apiURL } from '@/constants/configs'

const api = axios.create({
  baseURL: apiURL
})

type Products = {
  products?: []
}

const base = async (args: object): Promise<AxiosResponse> => {
  try {
    const r = await api({ ...args })
    return r.data
  } catch (err) {
    return err.response
  }
}

export const getProducts = async (data: string): Promise<AxiosResponse<Products>> => await base({ url: data })
export const getCart = async (data: string): Promise<AxiosResponse> => await base({ url: data })
