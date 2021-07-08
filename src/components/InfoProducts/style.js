import styled from 'styled-components'

export const Container = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 10px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #E3E3E3;
    padding-bottom: 8px;
  }
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
