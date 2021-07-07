import { useHistory } from 'react-router-dom'

export const usePath = () => {
  const history = useHistory()
  const state = history?.location?.state

  const products = () => history.push('/produtos')
  const cart = () => history.push('/carrinho')
  const checkout = () => history.push('/pagamento')
  const back = () => history.goBack()

  return {
    products,
    cart,
    checkout,
    back,
    state
  }
}
