import React, { useContext } from 'react'
import { Container, Header, SpanRd, Grow, Body } from './style'
import { CartContext } from '@/context/cart'
import { Product } from '@/types/product'

function Cart (props: Product): JSX.Element {
  const { addItem, deleteItem } = useContext(CartContext)

  return (
    <Container>
      <Header>
        <SpanRd>
          12345678
        </SpanRd>
        <h4>
          {props.name}
        </h4>
        <Grow />
        <span>x</span>
        <span>x</span>
      </Header>
      <Body>
        <ul>
          <li><img src={props.imageURL} title="" alt="imagem" /></li>
          <li><span>Base</span><span>Nexfar</span><span>R$ 4,50</span></li>
          <li><span>Estoque</span><div><span>(x)</span><span>{props.quantityAvailable} un</span></div></li>
          <li><span>Quantidade</span><div><button onClick={() => deleteItem(props)}>-</button><span>100 un</span><button onClick={() => addItem(props.arr)}>+</button></div></li>
          <li><span>Valor</span><span>R$ 450,00</span></li>
          <li><button>D</button></li>
        </ul>
        <div>
          <SpanRd>SIMILARES</SpanRd>
          <SpanRd>CIMED</SpanRd>
        </div>
      </Body>
    </Container>
  )
}

export default Cart
