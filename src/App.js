import React from 'react';
import Main from './Container/Main'
import './App.css';
import {Router} from 'react-router-dom';
import {history} from  './utility';

function App() {
  return (
    <Router history={history}>
      <Main></Main>
      
    </Router>
  );
}

export default App;

