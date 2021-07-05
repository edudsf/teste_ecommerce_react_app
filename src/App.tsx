import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'
import Router from '@/router/routes'

function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
        <Router />
      </ContainerRight>
    </BrowserRouter>
  )
}

export default App
