import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from './index'

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={index} /> {/* Головна сторінка */}
        </Switch>
      </Router>
    );
  }

export default App;
