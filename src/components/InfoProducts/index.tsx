import React, { useContext } from 'react'
import InfoBox from '@/components/CardsContainers/index'
import { Container } from './style'
import { CartContext } from '@/context/cart'

function InfoProducts (): JSX.Element {
  const { cart } = useContext(CartContext)
  const tax = 10.00
  return (
    <InfoBox name="PRODUTOS">
      {cart.map((item, index) => {
        const i = item.product
        const price = Number(item.quantity) * i.price.price
        return (
          <Container key={index}>
            <div>
              <p>{i.name}</p>
            </div>
            <div>
              <span>{item.quantity} un. - R$ {price.toFixed(2)}</span>
              <span>Impostos: R$ 10,00 Total: R$ {(tax + price).toFixed(2)}</span>
            </div>
          </Container>
        )
      })}
    </InfoBox>
  )
}

export default InfoProducts
