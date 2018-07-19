import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from './dashboard';
import AppContainer from './styles/styled';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <AppContainer>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">minerinfo</h1>
      </header>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  </AppContainer>
);

export default App;
