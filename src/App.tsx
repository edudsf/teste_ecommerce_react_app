import React from 'react'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'
import Products from './pages/Products'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
        <Products />
      </ContainerRight>
    </>
  )
}

export default App
