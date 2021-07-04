import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  & > *:not(:first-child) {
    margin-top: 20px;
    width: 50%;
    float: left;
    & > * {
      display: flex;
      &:first-of-type {
        color: #666;
        font-size: 0.8rem;
      }
      &:last-of-type {
        padding-top: 3px;
        font-weight: 600;
        font-size: 0.8rem;
      }
    }
  }
`
