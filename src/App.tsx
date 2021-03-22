import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
    <Header name="Sergio Chairez" profession="Software Engineering" />
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/projects" component={Portfolio}></Route>
    <Route path="/about" component={About}></Route>
    {/* <Route exact path="/contact" component={Contact}></Route> */}
    </Router>
    </div>


    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div> */}
  );
}

export default App;
