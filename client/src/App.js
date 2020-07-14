import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';
import Search from './pages/Search';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Books} />
      </>
    </Router>
  );
}

export default App;
