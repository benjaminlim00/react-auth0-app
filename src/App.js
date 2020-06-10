import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Callback from './Callback';
import Home from './Home';

function App() {
  return (
    <BrowserRouter className="App">
      <Route exact path="/" component={Home} exact />
      <Route exact path="/callback" component={Callback} exact />
    </BrowserRouter>
  );
}

export default App;
