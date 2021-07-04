import React from 'react'
import InfoBox from '../CardsContainers'
import { Container } from './style'
import { SpanRd } from '@/components/CardProduct/style'

const InfoClient = (): JSX.Element => {
  return (
    <InfoBox name="CLIENTE" button="VER DETALHES">
      <Container>
        <p><SpanRd>1324565</SpanRd></p>
        <p>
          <span>Razão Social</span>
          <span>FARMÁCIA DA ILHA</span>
        </p>
        <p>
          <span>CNPJ</span>
          <span>00.000.000/0000-00</span>
        </p>
      </Container>
    </InfoBox>
  )
}

export default InfoClient
