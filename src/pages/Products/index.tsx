import React, { useContext, useState, useEffect } from 'react'
import { Container, ContentLeft, ContentRigth, Filter, Search, OrderNome, Limit } from './style'
import { Span } from '@/styles/global.js'
import CardProduct from '@/components/CardProduct'
import { GettersContext } from '@/context/getters'
import Paginator from '@/utils/Paginator'

function Products (): JSX.Element {
  const { products } = useContext(GettersContext)
  console.log(products)
  let teste = 0
  const [search, setSearch] = useState('')
  const [page, setPage] = useState({
    pageNumber: 0,
    productsPerPage: 3
  })

  const pagesVisited = page.pageNumber * page.productsPerPage
  const returnProdcuts = products && products
    .filter(item => {
      if (item.name.includes(search.toUpperCase())) {
        teste++
        return item
      }
    })
    .slice(pagesVisited, pagesVisited + page.productsPerPage)
    .map((item, index) => {
      return (
        <CardProduct
          arr={item}
          id={item.id}
          price={item.price}
          key={index}
          name={item.name}
          imageURL={item.imageURL}
          barcode={item.barcode}
          quantityAvailable={item.quantityAvailable}
          maker={item.maker}
        />
      )
    })

  const count = products && Math.ceil(teste / page.productsPerPage)

  const handleInputSearch = (e): void => {
    setSearch(e.target.value)
  }

  const handleSelectLimit = (e): void => {
    setPage({
      productsPerPage: Number(e.target.value),
      pageNumber: page.pageNumber
    })
  }

  const changePage = (selected): void => {
    setPage({
      pageNumber: selected,
      productsPerPage: page.productsPerPage
    })
  }

  useEffect(() => {
    console.log('edu')
    setPage({
      pageNumber: count,
      productsPerPage: page.productsPerPage
    })
    changePage(0)
  }, [teste, page.productsPerPage])

  return (
    <Container>
      <ContentLeft>
        <Filter>
          <Search>
            <input onChange={() => handleInputSearch(event)} value={search} type="text"></input>
          </Search>
          <OrderNome>
            <Span>Ordenar por:</Span>
            <select id="teste">
              <option value="volvo">3</option>
              <option value="saab">6</option>
              <option value="opel">9</option>
              <option value="audi">12</option>
            </select>
          </OrderNome>
          <Limit>
            <Span>Exibição:</Span>
            <select onChange={() => handleSelectLimit(event)} id="cars">
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="13">15</option>
            </select>
          </Limit>
        </Filter>
        {returnProdcuts}
        {count === 1 ? '' : <Paginator count={count} onPageChange={changePage} />}
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
