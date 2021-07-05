import React, { useContext } from 'react'
import { Container, ContentLeft, ContentRigth, Filter, Search, OrderNome, Limit } from './style'
import { Span } from '@/styles/global.js'
import CardProduct from '@/components/CardProduct'
import { GettersContext } from '@/context/getters'

function Products (): JSX.Element {
  const { products } = useContext(GettersContext)
  console.log(products && products[0].name)
  return (
    <Container>
      <ContentLeft>
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
        {products && products.map((item, index) => {
          return (
            <CardProduct
              key={index}
              title={item.name}
              img={item.imageURL}
            />
          )
        })}
      </ContentLeft>
      <ContentRigth>
        <ul>
          <h4>AÇÕES COMERCIAIS</h4>
          <li><span><input type="checkbox" /></span><span>EM PROMOÇÃO</span></li>
          <li><span><input type="checkbox" /></span><span>EM OFERTA</span></li>
        </ul>
        <ul>
          <h4>ESTOQUE</h4>
          <li><span><input type="checkbox" /></span><span>ESTOQUE DISPONÍVEL</span></li>
        </ul>
        <ul>
          <h4>CATEGORIAS</h4>
          <li><span><input type="checkbox" /></span><span>GENÉRICOS</span></li>
          <li><span><input type="checkbox" /></span><span>SIMILARES</span></li>
          <li><span><input type="checkbox" /></span><span>PSICOTRÓPICOS</span></li>
          <li><span><input type="checkbox" /></span><span>HIGIENE E BELEZA</span></li>
        </ul>
      </ContentRigth>
    </Container>
  )
}

export default Products
