import React from 'react'
import { Container } from './style'

type Props = {
  count: number
  onPageChange: (param) => void
}

const Paginator = (props: Props): JSX.Element => {
  const range = []
  const paginate = (): number[] => {
    for (let i = 1; i <= props.count; i++) {
      range.push(i)
    }
    return range
  }

  return (
    <Container>
      <ul>
        {paginate().map((item, index) => {
          return (
            <li onClick={() => props.onPageChange(index)} key={index}>{item}</li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Paginator
