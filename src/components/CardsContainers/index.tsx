import React from 'react'
import { Container, Content } from './style'

type Infos = {
  name: string
  children: JSX.Element[] | JSX.Element
}

function InfoBox (props: Infos): JSX.Element {
  return (
    <Container>
      <h4>{ props.name }</h4>
      <Content>
        {props?.children}
      </Content>
    </Container>
  )
}

export default InfoBox
