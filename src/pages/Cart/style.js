import styled from 'styled-components'

export const Header = styled.div``

export const Body = styled.div`
  display: flex;
  & > :first-child {
    margin-right: 20px;
    flex-grow: 3;
  }
  & > :last-child {
    flex-grow: 1;
  }
`

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
  margin: 5px 0 24px 0;
  & div button {
    background: inherit;
    border: 0;
    padding: 10px;
    font-weight: 600;
  }
`

export const Container = styled.div`
  padding: 20px 0 20px 20px;
`
