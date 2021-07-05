import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Products, Cart, Checkout } from '@/pages/index'

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/produtos' component={Products} />
        <Route exact path='/carrinho' component={Cart} />
        <Route exact path='/pagamento' component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
