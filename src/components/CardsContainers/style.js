import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 15px #E3E3E3;
  border-radius: 14px;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #F2F2FF;
    & a {
      font-size: 0.9rem;
      font-weight: 500;
      color: #0496FF;
    }
  }
  & h4 {
    padding-bottom: 10px;
  }
`

export const Content = styled.div`
  padding-top: 20px;
`
