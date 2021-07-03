import React from 'react'
import { Container, Column1, Column3 } from './style'
import logo from '@/assets/images/Nexfar_Preto@4x.png'
import { Span } from '@/styles/global.js'

function Cart (): JSX.Element {
  console.log(logo)
  return (
    <Container>
      <Column1>
        <img src={logo} alt="" title="" />
      </Column1>
      <Column3>
        <div>
          <Span>teste</Span>
          <div>
            <Span>teste</Span>
            <Span>teste</Span>
          </div>
          <Span>teste</Span>
        </div>
        <div>
          <Span>Bell</Span>
          <Span>User</Span>
        </div>
      </Column3>
    </Container>
  )
}

export default Cart
