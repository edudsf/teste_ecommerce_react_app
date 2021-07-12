import React, { useContext } from 'react'
import { Container, Header, SpanRd, Grow, Body } from './style'
import { CartContext } from '@/context/cart'
import { Product } from '@/types/product'

function Cart (props: Product): JSX.Element {
  const { addItem, deleteItem, removeItemCart } = useContext(CartContext)
  const { cart } = useContext(CartContext)

  const searchProduct = (): number => {
    for (const value of cart) {
      if (value.product.id === props.id) {
        return value.quantity
      }
    }
  }

  const total = Number(searchProduct() * props.arr.price.price)

  searchProduct()
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
          <li><span>Base</span><span>Nexfar</span><span>R$ {props.arr.price.price}</span></li>
          <li><span>Estoque</span><div><span>(x)</span><span>{props.quantityAvailable} un</span></div></li>
          <li><span>Quantidade</span>
            {props.quantityAvailable === 0
              ? <span>Não disponível</span>
              : <div>
                <button onClick={() => deleteItem(props.arr)}>-</button><span>{searchProduct() ? searchProduct() : 0} un</span><button onClick={() => addItem(props.arr)}>+</button>
              </div>
            }
            {/*  <div>
              <button onClick={() => deleteItem(props.arr)}>-</button><span>{searchProduct() ? searchProduct() : 0} un</span><button onClick={() => addItem(props.arr)}>+</button>
            </div> */}
          </li>
          <li><span>Valor</span><span>R$ {total ? total.toFixed(2) : 0}</span></li>
          <li><button onClick={() => removeItemCart(props.arr)}>D</button></li>
        </ul>
        <div>
          <SpanRd>{props.maker}</SpanRd>
        </div>
      </Body>
    </Container>
  )
}

export default Cart
