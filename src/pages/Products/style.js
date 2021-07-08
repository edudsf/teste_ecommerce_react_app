import styled from 'styled-components'

export const Search = styled.div``
export const OrderNome = styled.div`
  & select {
    background: #fff;
    border: none;
    padding: 8px;
    border-radius: 50px;
  }
`
export const Limit = styled.div`
  & select {
    border-radius: 50px;
    border: none;
    padding: 8px;
  }
`

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
    position: relative;
    display: flex;
    & label {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #8F2D56;
      width: 40px;
      height: 40px;
      border-radius: 30px;
      color: #fff;
      bottom: -5px;
    }
    & input {
      border: 1px solid #bbb;
      padding: 7px 0 7px 30px;
      width: 100%;
      margin-left: 20px;
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
      background: #F5E0E9;
      border: 0;
      &:focus {
        outline: none;
      }
    }
  }
`
export const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 4fr 1fr;
  flex-direction: column;
`
