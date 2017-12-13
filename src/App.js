import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainContainer, HomeContainer, AuthenticateContainer } from 'container'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainContainer>
          <Switch>
            <Route path='/' exact component={HomeContainer} />
            <Route path='/auth' component={AuthenticateContainer} />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    );
  }
}

export default App;
