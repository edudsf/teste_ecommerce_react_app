import React from 'react'
import { Btn1, Btn2 } from './style'

type Btn = {
  name: string
  icon: string
}

export function BtnBlue (props: Btn): JSX.Element {
  return (
    <Btn1>
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </Btn1>
  )
}

export function BtnBack (): JSX.Element {
  return (
    <Btn2>
      <span>B</span>
      <span>VOLTAR</span>
    </Btn2>
  )
}
