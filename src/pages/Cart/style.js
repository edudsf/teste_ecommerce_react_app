import styled from 'styled-components'

export const Header = styled.div``
export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > :first-child {
    background: inherit;
    border: 0;
    font-weight: 600;
    font-size: 0.9rem;
    & > :first-of-type {
      margin-right: 10px;
    }
  }
  & > :last-child > :last-child {
    background: inherit;
    border: 0;
    margin-left: 30px;
    color: #D81159;
    font-weight: 600;
  }
`
export const Menu = styled.div`
  margin-top: 5px;
  & div button {
    background: inherit;
    border: 0;
    padding: 10px;
    font-weight: 600;
  }
`

export const Container = styled.div`
  padding: 20px;
`
