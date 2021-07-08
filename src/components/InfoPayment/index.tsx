import React, { useContext } from 'react'
import InfoBox from '@/components/CardsContainers'
import { Container } from './style'
import { CartContext } from '@/context/cart'

const InfoPayment = (): JSX.Element => {
  const { totalPrice } = useContext(CartContext)

  return (
    <InfoBox name="OPÇÃO DE PAGAMENTO">
      <Container>
        <p>O valor total dos produos é de R$ {totalPrice()} (com impostos).</p>
        <div>
          <span>
          Seleciona a forma de pagamento desejada:
          </span>
          <span>
            <select id="cars">
              <option value="volvo">Selecione a forma de pagamento</option>
              <option value="saab">Teste</option>
              <option value="opel">Teste</option>
              <option value="audi">Teste</option>
            </select>
          </span>
        </div>
      </Container>
    </InfoBox>
  )
}

export default InfoPayment
