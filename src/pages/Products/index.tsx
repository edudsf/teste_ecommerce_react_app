import React, { useContext, useState, useEffect } from 'react'
import { Container, ContentLeft, ContentRigth, Filter, Search, OrderNome, Limit } from './style'
import { Span } from '@/styles/global.js'
import CardProduct from '@/components/CardProduct'
import { GettersContext } from '@/context/getters'
import Paginator from '@/utils/Paginator'
import { Categories } from '@/types/categories'
import { Product } from '@/types/product'

function Products (): JSX.Element {
  const { products } = useContext<any>(GettersContext)

  const teste = 0
  let count = 0
  const [stateCheckbox, setStateCheckbox] = useState(false)
  const [filtercaty, setFilterCaty] = useState<Categories>({
    COSMÉTICOS: false,
    SIMILARES: false,
    psicotropicos: false,
    higiene: false
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [all, setAll] = useState(true)
  const [stock, setStock] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [actions, setActions] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState({
    pageNumber: 0,
    productsPerPage: 3
  })

  const pagesVisited = page.pageNumber * page.productsPerPage
  // const count = Math.ceil(teste / page.productsPerPage)

  const handleInputSearch = (e): void => {
    setStateCheckbox(!stateCheckbox)
    setSearch(e.target.value)
  }

  const handleSort = (e): void => {
    setSort(e.target.value)
    orderByName(e.target.value)
  }

  const orderByName = (char): Product[] => {
    products && products.sort((a, b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
    })
    if (char === 'z') {
      products && products.sort((b, a) => {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
      })
    }

    return products
  }

  /******************************************************/
  /******************************************************/

  const renderMethod = (): any => {
    if (search) {
      return filterCategory(products.filter(item => {
        if (item.name.includes(search.toUpperCase())) {
          return item
        }
      }))
    }
    if (stock === true && actions === true) {
      let array = []
      array = products.filter(item => {
        return item.quantityAvailable > 0
      }).filter(item => {
        return item.price.discount > 0
      })
      return filterCategory(array)
    }

    if (stock) {
      let array = [...products]
      array = products.filter(item => {
        return item.quantityAvailable > 0
      })
      return filterCategory(array)
    }

    if (actions) {
      let array = [...products]
      array = products.filter(item => {
        return item.quantityAvailable > 0
      })
      return filterCategory(array)
    }
    return filterCategory(products)
  }

  /******************************************************/
  /******************************************************/

  const filterCategory = (array): Product[] => {
    const newArr = []
    for (const value in filtercaty) {
      if (filtercaty[value] === true) {
        newArr.push(...array.filter(item => {
          return item.category === value
        }))
      }
    }
    if (newArr.length === 0) {
      count = Math.ceil(array.length / page.productsPerPage)
      return array
    } else {
      count = Math.ceil(newArr.length / page.productsPerPage)
      return newArr
    }
  }

  /******************************************************/
  /******************************************************/

  const renderFilter = (array: Product[]): any[] => {
    return array.slice(pagesVisited, pagesVisited + page.productsPerPage)
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
  }
  /******************************************************/
  /******************************************************/

  const handleSelectCategories = (e): void => {
    setStateCheckbox(!stateCheckbox)
    const { name } = e.target
    setFilterCaty({
      ...filtercaty,
      [name]: e.target.checked
    })
    if (name === 'stock') {
      setStock(!stock)
    }
  }

  const handleSelectLimit = (e): void => {
    setStateCheckbox(!stateCheckbox)
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

  /******************************************************/
  /******************************************************/

  useEffect(() => {
    changePage(0)
  }, [filtercaty, stock, teste, page.productsPerPage, search])

  return (
    <Container>
      <ContentLeft>
        <Filter>
          <Search>
            <label>ic</label>
            <input placeholder="pesquisar" onChange={() => handleInputSearch(event)} value={search} type="text"></input>
          </Search>
          <OrderNome>
            <Span>Ordenar por:</Span>
            <select onChange={() => handleSort(event)} id="teste">
              <option value="">selecioar</option>
              <option value="a">Nome (A-Z)</option>
              <option value="z">Nome (Z-A)</option>
            </select>
          </OrderNome>
          <Limit>
            <Span>Exibição:</Span>
            <select onChange={() => handleSelectLimit(event)} id="limit">
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </Limit>
        </Filter>
        {renderFilter(renderMethod())}
        {count === 1 ? '' : <Paginator count={count} state={stateCheckbox} onPageChange={changePage} />}
      </ContentLeft>
      <ContentRigth>
        <ul>
          <h4>AÇÕES COMERCIAIS</h4>
          <li><span><input type="checkbox" /></span><span>EM PROMOÇÃO</span></li>
          <li><span><input type="checkbox" /></span><span>EM OFERTA</span></li>
        </ul>
        <ul>
          <h4>ESTOQUE</h4>
          <li><span><input name="stock" onChange={handleSelectCategories} type="checkbox" /></span><span>ESTOQUE DISPONÍVEL</span></li>
        </ul>
        <ul>
          <h4>CATEGORIAS</h4>
          <li><span><input checked disabled name="all" onChange={handleSelectCategories} type="checkbox" value='all' /></span><span>TODAS</span></li>
          <li><span><input name="COSMÉTICOS" onChange={handleSelectCategories} value='genericos' type="checkbox" /></span><span>GENÉRICOS</span></li>
          <li><span><input name="SIMILARES" onChange={handleSelectCategories} value='similares' type="checkbox" /></span><span>SIMILARES</span></li>
          <li><span><input name="psicotropicos" onChange={handleSelectCategories} value='psico' type="checkbox" /></span><span>PSICOTRÓPICOS</span></li>
          <li><span><input name="higiene" onChange={handleSelectCategories} value='higiene' type="checkbox" /></span><span>HIGIENE E BELEZA</span></li>
        </ul>
      </ContentRigth>
    </Container>
  )
}

export default Products
