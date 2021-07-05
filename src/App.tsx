import React from 'react'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'
// import Checkout from './pages/Checkout'
// import Cart from './pages/Cart'
import Products from './pages/Products'
import { products } from './services/api'

function App (): JSX.Element {
  products('cart').then((res) => {
    console.log(res)
  }).catch((res) => {
    console.log(res)
  })

  return (
    <>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
        <Products />
        {/* <Cart /> */}
        {/* <Checkout /> */}
      </ContainerRight>
    </>
  )
}

export default App
