import { useHistory } from 'react-router-dom'

export const usePath = () => {
  const history = useHistory()
  const state = history?.location?.state

  const produtos = () => history.push('/produtos')
  const carrinho = () => history.push('/carrinho')
  const pagamento = () => history.push('/pagamento')
  const back = () => history.goBack()

  return {
    produtos,
    carrinho,
    pagamento,
    back,
    state
  }
}
