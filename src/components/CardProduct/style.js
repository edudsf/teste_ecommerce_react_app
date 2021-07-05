import styled from 'styled-components'

export const SpanRd = styled.span`
    color: #fff;
    background: black;
    font-size: 0.6em;
    padding: 6px 12px;
    border-radius: 50px;
`
export const Grow = styled.div``
export const Container = styled.div`
  width: 100%;
  background: #fff;
  margin: 20px 0;
  padding: 14px;
  border-radius: 14px;
  box-shadow: 0 0 15px #E3E3E3;
`

export const Header = styled.div`
  display: flex;
  border-bottom: 2px solid #F2F2FF;
  padding-bottom: 10px;
  align-items: center;
  & h4 {
    font-size: 0.9rem;
    color: #333;
    margin-left: 30px;
  }
  & ${Grow} {
    flex-grow: 1;
  }
`

export const Body = styled.div`
  & ul {
    padding: 20px 0 13px 0;
    display: flex;
  }
  & > div {
    position: relative;
    left: 15px;
    margin-left: 16.66%;
    margin-bottom: 3px;
    & span {
      font-size: 0.75em;
    }
    & > span:not(:first-child) {
      margin-left: 10px;
    }
  }
  & ul li {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: start;
    &:not(:first-child){
      border-bottom: 2px solid #333;
      padding-bottom: 20px;
    }
    &:first-of-type {
      justify-content: center;
    }
    &:nth-of-type(1){
      width: 80px;
      padding-right: 10px;
      & img {
        align-self: center;
        height: 80px;
      }
    }
    &:nth-of-type(2){
      & > :last-child {
        font-weight: 600;
      }
      & > :not(:first-child){
        position: relative;
        top: -8px;
      }
    }
    &:nth-of-type(4) {
      & div {
        & span {
          margin: 0 10px;
          border-bottom: 2px solid #333;
          font-weight: 600;
        }
        & button {
          width: 24px;
          height: 24px;
          line-height: 20px;
          border-radius: 100%;
          font-weight: 500;
          font-size: 1.2em;
          border: 2px solid #333;
          &:first-of-type {
            border-color: red;
            color: red;
          }
          &:last-of-type {
            border-color: #0496FF;
            color: #0496FF;
          }
        }
      }
    }
    &:nth-of-type(5) {
      & > :last-child {
        font-weight: 600;
      }
    }
    &:nth-of-type(6) {
      & button {
        align-self: center;
      }
    } 

    &:last-of-type {
      justify-content: center;
    }
    
    &:not(:first-of-type):not(:last-of-type) > :first-child {
      margin-bottom: 30px;
    }
  }
  & span {
    font-size: 0.9em;
  }
`
