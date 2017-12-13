import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainContainer } from 'container'
import { HomeContainer } from 'container'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainContainer>
          <Switch>
            <Route path='/' exact component={HomeContainer} />
          </Switch>
        </MainContainer>
      </BrowserRouter>
    );
  }
}

export default App;
