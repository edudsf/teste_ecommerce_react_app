import styled from 'styled-components'

export const Container = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > :last-child {
    font-size: 0.9rem;
    text-align: right;
    display: flex;
    flex-direction: column;
    & > :last-child {
      color: #999;
      font-size: 0.8rem;
    }
  }
`
