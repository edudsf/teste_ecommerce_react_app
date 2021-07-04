import styled from 'styled-components'

export const Search = styled.div``
export const OrderNome = styled.div``
export const Limit = styled.div``

export const ContentLeft = styled.div`
  padding: 20px;
`

export const ContentRigth = styled.div`
  border-left: 1px solid #D8D8D8;
  padding: 30px 20px 20px 20px;
  & ul {
    padding-bottom: 20px;
    & > *:not(h4) {
      font-size: 0.85rem;
      padding: 5px 0;
      & > :first-child {
        margin-right: 8px;
      }
    }
  }
  & ul h4 {
    color: #8F2D56;
    padding-bottom: 14px;
    font-size: 0.9rem;
  }
`

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 20px 0;
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
      border: 1px solid #bbb;
      padding: 10px;
      width: 100%;
    }
  }
`
export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 4fr 1fr;
  flex-direction: column;
`
