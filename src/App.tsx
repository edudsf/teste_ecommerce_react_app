import React, { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'
// import Checkout from './pages/Checkout'
// import Cart from './pages/Cart'
// import Products from './pages/Products'
import { GettersContext } from '@/context/getters'
import Router from '@/router/routes'

function App (): JSX.Element {
  const { products } = useContext(GettersContext)

  console.log(products)

  return (
    <BrowserRouter>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
        <Router />
        {/* <Products /> */}
        {/* <Cart /> */}
        {/* <Checkout /> */}
      </ContainerRight>
    </BrowserRouter>
  )
}

export default App
