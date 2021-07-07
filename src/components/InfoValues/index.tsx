import React, { useContext } from 'react'
import InfoBox from '@/components/CardsContainers'
import { Container } from './style'
import { CartContext } from '@/context/cart'

function InfoValues (): JSX.Element {
  const { cart } = useContext(CartContext)

  const taxes = 10.00
  // const totalWtaxes = taxes + total

  const totalPrice = (): number => {
    let total: number = 0
    let totalAll: number = 0
    for (const value of cart) {
      total = value.quantity * value.product.price.price
      totalAll += total
    }

    return Number(totalAll.toFixed(2))
  }

  return (
    <InfoBox name="VALORES">
      <Container>
        <div>
          <span>Total</span>
          <span>(sem impostos)</span>
          <span>R$ {totalPrice()}</span>
        </div>
        <div>
          <span>Impostos</span>
          <span>R$ {Number(cart.length * taxes).toFixed(2)}</span>
        </div>
        <div>
          <span>Total:</span>
          <span>R$ {totalPrice() + taxes * cart.length}</span>
        </div>
      </Container>
    </InfoBox>
  )
}

export default InfoValues
