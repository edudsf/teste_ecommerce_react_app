import React, { useEffect, useState } from 'react'
import { Container, List } from './style'

type Props = {
  count: number
  onPageChange: (param) => void
  state: boolean
}

const Paginator = (props: Props): JSX.Element => {
  useEffect(() => {
    setCurrentPage(1)
    setMaxPageNumberLimit(3)
    setMinPageNumberLimit(0)
  }, [props.state])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pageNumberLimit, setPageNumberLimit] = useState(3)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const range = []
  const paginate = (): number[] => {
    for (let i = 1; i <= props.count; i++) {
      range.push(i)
    }
    return range
  }

  const changeState = (index, item): void => {
    setCurrentPage(item)
    props.onPageChange(index)
  }

  const renderPageNumbers = paginate().map((item, index) => {
    if (item < maxPageNumberLimit + 1 && item > minPageNumberLimit) {
      return (
        <List className={currentPage === item ? 'active' : null} onClick={() => changeState(index, item)} key={index}>{item}</List>
      )
    }
  })

  const handleNext = (): void => {
    if (currentPage === props.count) {
      return null
    }
    setCurrentPage(currentPage + 1)
    props.onPageChange(currentPage)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  const handlePrev = (): void => {
    const index = currentPage - 1
    if (index === 0) {
      return null
    }
    setCurrentPage(currentPage - 1)
    props.onPageChange(index - 1)

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  return (
    <Container>
      <ul>
        <li onClick={handlePrev}>Prev</li>
        {renderPageNumbers}
        <li onClick={handleNext}>Next</li>
      </ul>
    </Container>
  )
}

export default Paginator
