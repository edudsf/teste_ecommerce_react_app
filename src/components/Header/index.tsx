import React, { useContext } from 'react'
import { Container, Column1, Column3 } from './style'
import logo from '@/assets/images/Nexfar_Preto@4x.png'
import { Span } from '@/styles/global.js'
import { CartContext } from '@/context/cart'
import { Link } from 'react-router-dom'

function Cart (): JSX.Element {
  const { totalPrice } = useContext(CartContext)

  return (
    <Container>
      <Column1>
        <img src={logo} alt="" title="" />
      </Column1>
      <Column3>
        <div>
          <Link to="/carrinho">
            <Span>NEXFAR</Span>
            <div>
              <Span>icon</Span>
              <Span>R$ {totalPrice()}</Span>
            </div>
            <Span>Pedido mínimo R$ 150,00</Span>
          </Link>
        </div>
        <div>
          <Span>Bell</Span>
          <Span>icon</Span>
        </div>
      </Column3>
    </Container>
  )
}

export default Cart
