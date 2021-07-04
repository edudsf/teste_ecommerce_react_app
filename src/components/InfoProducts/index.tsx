import React from 'react'
import InfoBox from '@/components/CardsContainers/index'
import { Container } from './style'

function InfoProducts (): JSX.Element {
  return (
    <InfoBox name="PRODUTOS">
      <Container>
        <div>
          <p>CIMEGRIPE C/20PS (PARAC+FENIL+CLOR)</p>
        </div>
        <div>
          <span>100un - R$ 450,00</span>
          <span>Impostos: R$ 10,00 Total: R$ 450,00</span>
        </div>
      </Container>
    </InfoBox>
  )
}

export default InfoProducts
