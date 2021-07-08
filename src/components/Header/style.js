import styled from 'styled-components'

export const Column1 = styled.div``
export const Column2 = styled.div``
export const Column3 = styled.div``

export const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr 6fr 250px 1fr;
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
    font-size: 0.9em;
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
      & > :first-child {
        padding-right: 16px;
      }
    }
    & > :first-child {
      padding-right: 10px;
      & > a * {
        padding: 4px 0;
      }
      & > a span:last-of-type {
        font-size: 0.8em;
      }
      & div > :last-child {
        padding-left: 6px;
        font-weight: 600;
        color: #006BA6;
      }
    }
  }
`
