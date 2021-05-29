import React from 'react';
import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path = '/' exact component = {Home}/> 
          <Route path = '/About' exact component = {About}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
