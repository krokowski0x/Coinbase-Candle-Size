import React, { Component } from 'react';
import CandleChart from './CandleChart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Coinbase Candle Size Indicator</h1>
        <CandleChart />
      </div>
    );
  }
}

export default App;
