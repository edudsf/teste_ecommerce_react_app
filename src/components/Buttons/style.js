import styled from 'styled-components'

export const Btn1 = styled.button`
  padding: 12px;
  background: #006BA6;
  border: 0;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  & > :last-child {
    padding-left: 10px;
  }
`

export const Btn2 = styled.button`
  background: inherit;
  border: 0;
  font-weight: 600;
  font-size: 0.9rem;
  & > :first-of-type {
    margin-right: 10px;
  }
`
