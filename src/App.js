import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, PrivateRoute } from 'container'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainContainer>
          <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/auth' component={AuthenticateContainer} />
            <PrivateRoute path='/feed' component={FeedContainer} />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    );
  }
}

export default App;
