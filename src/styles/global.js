import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  body > div {
    background: #F6F6FF;
    display: grid;
    grid-template-columns: 1fr 2fr 6fr 2fr 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
  }
`
export const Container = styled.div`
  margin: 0
`

export const H2 = styled.h2`
  color: #333;
  font-size: 1em;
`

export const Span = styled.span`
  color: #333;
`

export const ContainerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #fff;
  grid-column-start: 1;
  grid-column-end: 3;
`

export const ContainerRight = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
`
