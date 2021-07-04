import React from 'react'
import InfoBox from '@/components/CardsContainers'
import { Container } from './style'

function InfoValues (): JSX.Element {
  return (
    <InfoBox name="VALORES">
      <Container>
        <div>
          <span>Total</span>
          <span>(sem impostos)</span>
          <span>R$ 450,00</span>
        </div>
        <div>
          <span>Impostos</span>
          <span>R$ 10,00</span>
        </div>
        <div>
          <span>Total:</span>
          <span>R$ 460,00</span>
        </div>
      </Container>
    </InfoBox>
  )
}

export default InfoValues
