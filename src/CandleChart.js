import React, { Component } from 'react';
import Candle from './Candle.js'
import './CandleChart.css';

const APIURL = 'https://api-public.sandbox.pro.coinbase.com/products/';

export default class CandleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { candles, currency, baseCurrency, max, min } = this.state;

    return (
      <div className="CandleChart">
        {candles.map(candle => {
          return (
          <Candle
            time={candle[0]}
            low={candle[1]}
            high={candle[2]}
            open={candle[3]}
            close={candle[4]}
            max={max}
            min={min}
          />
        )})}
      </div>
    );
  };
};
