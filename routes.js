import { Route, Router } from 'react-router'
import React from 'react'

import Home from './src/components/containers/Home'

class Routes extends React.Component {
  constructor() {
    super()

    // Configure routes here as this solves a problem with hot loading where
    // the routes are recreated each time. (Not useful here because we do not have ho reloading)
    this.routes = (
      <Route path="/" component={Home}/>
    )
  }

  render() {
    const { history } = this.props

    return (
      <Router history={history}>
        {this.routes}
      </Router>
    )
  }
}

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
}

export default Routes
