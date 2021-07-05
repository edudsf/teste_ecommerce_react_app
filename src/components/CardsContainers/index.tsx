import React from 'react'
import { Container, Content } from './style'

type Infos = {
  name: string
  children: JSX.Element[] | JSX.Element
  button?: string
}

function InfoBox (props: Infos): JSX.Element {
  return (
    <Container>
      <div><h4>{ props.name }</h4><a href="#">{props.button}</a></div>
      <Content>
        {props?.children}
      </Content>
    </Container>
  )
}

export default InfoBox
