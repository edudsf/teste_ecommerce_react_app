import { BtnBack, BtnBlue } from '@/components/Buttons'
import InfoClient from '@/components/InfoClient'
// import InfoBox from '@/components/CardsContainers'
import InfoProducts from '@/components/InfoProducts'
import InfoValues from '@/components/InfoValues'
import React, { useContext } from 'react'
import { Container, Header, Navigation, Menu, Body } from './style'
import { usePath } from '@/hooks/use_path'
import { CartContext } from '@/context/cart'

function Cart (): JSX.Element {
  const go = usePath()
  const { clearCart } = useContext(CartContext)

  return (
    <Container>
      <Header>
        <Navigation>
          <BtnBack onClick={go.back} icon="V" name="VOLTAR"/>
          <div>
            <BtnBlue onClick={go.checkout} name="IR PARA PAGAMENTO" icon="C" />
            <button onClick={clearCart}><span>LIMPAR CARRINHO </span><span>D</span></button>
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
