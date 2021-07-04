import styled from 'styled-components'

export const Container = styled.div`
  display: block;
  overflow: hidden;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  & > * {
    & > :last-child {
      padding-top: 4px;
      font-weight: 600;
      color: #000;
      font-size: 0.9rem;
    }
  }
  & > :first-child {
    float: left;
    width: 50%;
    & > * {
      display: block;
    }
  }
  & > :nth-child(2) {
    width: 50%;
    float: right;
    & > * {
      display: block;
    }
  }
  & > :last-child {
    margin-top: 20px;
    display: block;
    width: 100%;
    float: left;
    flex-direction: column;
    & > * {
      display: block;
    }
  }
`
