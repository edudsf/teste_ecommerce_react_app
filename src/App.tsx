import React from 'react'
import Header from '@/components/Header'
import { ContainerLeft, ContainerRight } from '@/styles/global.js'
import SideMenu from './components/SideMenu'

function App (): JSX.Element {
  return (
    <>
      <Header />
      <ContainerLeft>
        <SideMenu />
      </ContainerLeft>
      <ContainerRight>
      </ContainerRight>
    </>
  )
}

export default App
