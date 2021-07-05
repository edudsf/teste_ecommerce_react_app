import axios, { AxiosResponse } from 'axios'
import { apiURL } from '@/constants/configs'

const api = axios.create({
  baseURL: apiURL
})

const base = async (args: object): Promise<AxiosResponse> => {
  try {
    const r = await api({ ...args })
    console.log(r)
    return r
  } catch (err) {
    console.log(err)
    return err
  }
}

export const getProducts = async (data: string): Promise<AxiosResponse> => base({ url: data })
export const getCart = async (data: string): Promise<AxiosResponse> => base({ url: data })
