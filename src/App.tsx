import React from 'react'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'
import Cart from './pages/Cart'
// import Products from './pages/Products'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
        {/* <Products /> */}
        <Cart />
      </ContainerRight>
    </>
  )
}

export default App
