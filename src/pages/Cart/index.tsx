import { BtnBlue } from '@/components/Buttons'
import InfoClient from '@/components/InfoClient'
// import InfoBox from '@/components/CardsContainers'
import InfoProducts from '@/components/InfoProducts'
import InfoValues from '@/components/InfoValues'
import React from 'react'
import { Container, Header, Navigation, Menu, Body } from './style'

function Cart (): JSX.Element {
  return (
    <Container>
      <Header>
        <Navigation>
          <button>
            <span>B</span>
            <span>VOLTAR</span>
          </button>
          <div>
            <BtnBlue name="IR PARA PAGAMENTO" icon="C" />
            <button><span>LIMPAR CARRINHO </span><span>D</span></button>
          </div>
        </Navigation>
        <Menu>
          <div>
            <button>RESUMO</button>
            <button>PRODUTOS</button>
            <button>INFORMAÇÕES ADICIONAIS</button>
          </div>
        </Menu>
      </Header>
      <Body>
        <div>
          <InfoProducts />
          <InfoClient />
        </div>
        <div>
          <InfoValues />
        </div>
      </Body>
    </Container>
  )
}

export default Cart
