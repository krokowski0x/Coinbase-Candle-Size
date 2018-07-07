import React, { Component } from 'react';
import CandleSize from './CandleSize.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Coinbase Candle Size Indicator</h1>
        <CandleSize />
      </div>
    );
  }
}

export default App;
