import { BtnBack, BtnBlue } from '@/components/Buttons'
import React from 'react'
import { Container, Header } from './style'
import { Body } from '@/pages/Cart/style'
import InfoValues from '@/components/InfoValues'
import InfoProducts from '@/components/InfoProducts'
import InfoPayment from '@/components/InfoPayment'
import InfoAddress from '@/components/InfoAddress'
import InfoGeneral from '@/components/InfoGeneral'

function Checkout (): JSX.Element {
  return (
    <Container>
      <Header>
        <BtnBack/>
        <BtnBlue name="ENVIAR PEDIDO" icon="v" />
      </Header>
      <Body>
        <div>
          <InfoPayment/>
          <InfoAddress/>
          <InfoGeneral/>
          <InfoProducts/>
        </div>
        <div>
          <InfoValues/>
        </div>
      </Body>
    </Container>
  )
}

export default Checkout
