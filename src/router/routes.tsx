import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Products, Cart, Checkout } from '@/pages/index'

const Router = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path='/' component={Products} />
      <Route exact path='/carrinho' component={Cart} />
      <Route exact path='/pagamento' component={Checkout} />
    </Switch>
  )
}

export default Router
