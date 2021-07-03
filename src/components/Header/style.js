import styled from 'styled-components'

export const Column1 = styled.div``
export const Column2 = styled.div``
export const Column3 = styled.div``

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 6fr 2fr 1fr;
  grid-template-rows: auto 1fr;
  grid-column-start: 1;
  grid-column-end: 6;
  background: #fff;
  border-bottom: 3px solid #006BA6;
  padding: 20px 0;
  & ${Column1} {
    text-align: left;
    grid-column-start: 2;
    grid-column-end: 3;
    & img {
      width: 130px;
    }
  }
  & ${Column3} {
    align-items: center;
    display: flex;
    grid-column-start: 4;
    grid-column-end: 5;
    & > * {
      flex-grow: 1;
      text-align: center;
    }
    & > :last-child {
      text-align: right;
    }
  }
`
