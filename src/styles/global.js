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
    background: #9999;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  }
`
export const Container = styled.div`
  margin: 0
`
