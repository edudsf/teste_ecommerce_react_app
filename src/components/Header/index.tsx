import React from 'react'
import { Container } from './style'
import logo from '@/assets/images/Nexfar_Preto@4x.png'

function Cart (): JSX.Element {
  console.log(logo)
  return (
    <>
      <Container><img src={logo} alt="" title="" />Teste</Container>
    </>
  )
}

export default Cart
