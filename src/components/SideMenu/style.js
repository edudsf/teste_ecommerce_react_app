import styled from 'styled-components'

export const Row1 = styled.div``
export const Row2 = styled.div``
export const Row3 = styled.div``
export const Row4 = styled.div``

export const Container = styled.div`
& ${Row1}{
  padding-right: 10px;
  display: flex;
  align-items: center;
  & > :nth-child(2){
    padding: 0 20px;
  }
}
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 3;
& > :first-child {
  margin-top: 20px;
}
& > * {
  padding: 10px 0;
}
& > * > * > * {
  padding: 0 0 10px 0;
}
& > :not(:first-child){
  & > :first-child {
    margin-bottom: 16px;
  }
  & ul li:hover {
    background: #F6F6FF;
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
  }
  & ul li {
    color: #999;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 0.95em;
    padding: 10px 0 10px 0;
  }
  & ul li > * {
    padding-left: 12px;
    &:nth-child(2){
      padding-left: 20px;
    }
  }
  & ul li a {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
`
