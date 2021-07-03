import styled from 'styled-components'

export const Search = styled.div``
export const OrderNome = styled.div``
export const Limit = styled.div``

export const Filter = styled.div`
  display: flex;
  & > * {
    text-align: center; 
  }
  & > :first-child {
    flex-grow: 1;
  }
  & > :not(:first-child){
    padding-left: 20px;
    & > :first-child {
      padding-right: 10px;
    }
  }
  & ${Search} {
    & input {
      width: 100%;
    }
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  flex-direction: column;
  background-color: red;
  padding: 20px;
`
