import { BtnBlue } from '@/components/Buttons'
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

        </div>
        <div>

        </div>
      </Body>
    </Container>
  )
}

export default Cart
