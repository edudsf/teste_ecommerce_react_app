// eslint-disable-next-line no-use-before-define
import React, { createContext } from 'react'

export const GettersContext = createContext()

export const GettersProvider = ({ children }) => {
  return (
    <GettersContext.Provider value={}>
      {children}
    </GettersContext.Provider>
  )
}
