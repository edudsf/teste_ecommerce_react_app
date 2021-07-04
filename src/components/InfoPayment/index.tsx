import React from 'react'
import InfoBox from '@/components/CardsContainers'
import { Container } from './style'

const InfoPayment = (): JSX.Element => {
  return (
    <InfoBox name="OPÇÃO DE PAGAMENTO">
      <Container>
        <p>O valor total dos produos é de R$ 460,00 (com impostos).</p>
        <div>
          <span>
          Seleciona a forma de pagamento desejada:
          </span>
          <span>
            <select id="cars">
              <option value="volvo">Selecione a forma de pagamento</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </span>
        </div>
      </Container>
    </InfoBox>
  )
}

export default InfoPayment
