import React, {Component} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import CartPage from './Components/CartPage';
import Navbar from './Components/Navbar';
// App.js is a module and contains the root component App, and the other components

class App extends Component {
  render() {
    return(
      <div className="App">
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
