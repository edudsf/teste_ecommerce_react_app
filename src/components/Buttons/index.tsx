import React from 'react'
import { Btn1, Btn2 } from './style'

type Btn = {
  name: string
  icon: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function BtnBlue (props: Btn): JSX.Element {
  return (
    <Btn1 {...props}>
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </Btn1>
  )
}

export function BtnBack (props: Btn): JSX.Element {
  return (
    <Btn2 {...props}>
      <span>{props.name}</span>
      <span>{props.icon}</span>
    </Btn2>
  )
}
