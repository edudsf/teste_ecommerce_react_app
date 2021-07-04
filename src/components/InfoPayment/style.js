import styled from 'styled-components'

export const Container = styled.div`
  & p {
    font-size: 0.85rem;
    margin-bottom: 30px;
  }
  & div {
    display: flex;
    justify-content: space-between;
  }
  & div > :first-child {
    font-weight: 600;
    font-size: 0.9rem;
    margin-right: 20px;
  }
  & div > :last-child select {
    border: 0;
    border-bottom: 2px solid #333;
    padding-bottom: 3px;
    font-weight: 600;
    &:focus {
      outline: none;
    }
  }
`
