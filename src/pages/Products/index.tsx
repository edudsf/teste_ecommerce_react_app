import React from 'react'
import { Container, Filter, Search, OrderNome, Limit } from './style'
import { Span } from '@/styles/global.js'

function Products (): JSX.Element {
  return (
    <Container>
      <Filter>
        <Search>
          <input type="text"></input>
        </Search>
        <OrderNome>
          <Span>Ordenar por:</Span>
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </OrderNome>
        <Limit>
          <Span>Exibição:</Span>
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </Limit>
      </Filter>
    </Container>
  )
}

export default Products
