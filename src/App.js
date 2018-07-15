import React, { Component } from 'react';
import Toggle from 'react-toggle';
import { CandleSizeIndicator } from './CandleSizeIndicator.js';
import "react-toggle/style.css"

const APIURL = 'https://api-public.sandbox.pro.coinbase.com/products/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.toggleCandleSize = CandleSizeIndicator.bind(this);
    this.state = {
      candleSize: false,
      candles: [],
      currency: 'BTC',
      baseCurrency: 'USD',
    };
  };

  filterOutWeirdCandles(candles) {
    return candles.filter(candle => (candle[1] > 1 && candle[2] < 50000));
  };

  getPriceBoundries(candles) {
    let min = Infinity;
    let max = -Infinity;
    candles.forEach(candle => {
      if (candle[1] < min) min = candle[1];
      if (candle[2] > max) max = candle[2];
    })
    this.setState({ candles, max, min })
  };

  componentDidMount() {
    const { currency, baseCurrency } = this.state;

    fetch(`${APIURL}${currency}-${baseCurrency}/candles?granularity=3600`)
    .then(res => res.json())
    .then(candles => this.filterOutWeirdCandles(candles))
    .then(candles => this.getPriceBoundries(candles));
  };

  render() {
    const { candleSize } = this.state;

    return (
      <div className="App">
        <header></header>
        <main>
          <label>
            <Toggle
              checked={candleSize}
              defaultChecked={candleSize}
              onChange={this.toggleCandleSize}
            />
            <span>Candle Size</span>
          </label>
        </main>
        <footer></footer>
      </div>
    );
  };
};
