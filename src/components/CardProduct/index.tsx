import React from 'react'
import { Container, Header, SpanRd, Grow, Body } from './style'

function Cart (): JSX.Element {
  return (
    <Container>
      <Header>
        <SpanRd>
          12345678
        </SpanRd>
        <h4>
          CIMEGRIPE C/20CPS (PARA+FENIL+CLOR)
        </h4>
        <Grow />
        <span>x</span>
        <span>x</span>
      </Header>
      <Body>
        <ul>
          <li><img src="" title="" alt="imagem" /></li>
          <li><span>Base</span><span>Nexfar</span><span>R$ 4,50</span></li>
          <li><span>Estoque</span><div><span>(x)</span><span>1000 un</span></div></li>
          <li><span>Quantidade</span><div><button>-</button><span>100 un</span><button>+</button></div></li>
          <li><span>Valor</span><span>R$ 450,00</span></li>
          <li><button>D</button></li>
        </ul>
        <div>
          <SpanRd>SIMILARES</SpanRd>
          <SpanRd>CIMED</SpanRd>
        </div>
      </Body>
    </Container>
  )
}

export default Cart
