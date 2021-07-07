import styled from 'styled-components'

export const List = styled.li`
  /* background: ${props => props.active === false ? 'blue' : 'red'}; */
  
  &.active {
    background: #006BA6;
    color: #fff;
  }

 /*  ${props => {
    if (props.active === true) {
 return `
    &:nth-of-type(${props.teste}) {
      background: black;
    }
    `
}
  }} */
`
export const Container = styled.div`
  width: 500px;
  height: 60px;
  & ul {
    & > :not(:first-child) {
      margin-left: 12px;
    }
  }
  & ul li {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    cursor: pointer;
    /* ${({ active }) => active && `
      &:nth-of-type(1) {
        background: ${({ index }) => index};
      }
    `} */
    width: 26px;
    height: 26px;
    border-radius: 20px;
    font-size: 0.8em;
    color: black;
  }
`
