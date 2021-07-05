import React from 'react'
import { Container, Row1, Row2, Row3, Row4 } from './style'
import { H2 } from '@/styles/global.js'
import { Link } from 'react-router-dom'

function SideMenu (): JSX.Element {
  // const [active, setActive] = useState()

  return (
    <Container>
      <Row1>
        <div>i</div>
        <div>
          <H2>FARMÁCIA DA LINHA</H2>
          <span>0000</span>
        </div>
        <span>o</span>
      </Row1>
      <Row2>
        <H2>COMPRAS</H2>
        <ul>
          <li><Link to="/carrinho" /><span>i</span><span>Promoções</span></li>
          <li><Link to="" /><span>i</span><span>Produtos</span></li>
          <li><Link to="" /><span>i</span><span>Pedidos</span></li>
          <li><Link to="" /><span>i</span><span>Cupons</span></li>
        </ul>
      </Row2>
      <Row3>
        <H2>ADMINISTRATIVO</H2>
        <ul>
          <li><a href="" /><span>i</span><span>Estabelecimento</span></li>
          {/* Está em formato de lista para caso seja adicionado mais algum item */}
        </ul>
      </Row3>
      <Row4>
        <H2>AJUDA</H2>
        <ul>
          <li><a href="" /><span>i</span><span>WhatsApp</span></li>
          <li><a href="" /><span>i</span><span>Contato Distribuidora</span></li>
        </ul>
      </Row4>
    </Container>
  )
}

export default SideMenu
