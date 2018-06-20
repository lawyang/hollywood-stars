import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import HollywoodList from '../App/HollywoodList/Hollywod';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HollywoodList />
      </div>
    );
  }
}

export default App;
