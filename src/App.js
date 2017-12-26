import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from 'helpers/PrivateRoute'
import RedirectRoute from 'helpers/RedirectRoute'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer,
  LogoutContainer, UserContainer } from 'container'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainContainer>
          <Switch>
            <RedirectRoute path='/' exact component={HomeContainer} redirectTo='/feed' />
            <Route path='/auth' component={AuthenticateContainer} />
            <PrivateRoute path='/feed' component={FeedContainer} />
            <Route path='/logout' component={LogoutContainer} />
            <PrivateRoute path='/:uid' component={UserContainer} />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    )
  }
}

export default App;
