import React, { Component } from 'react';
import Candle from './Candle.js'
import './CandleSize.css';

const APIURL = 'https://api-public.sandbox.pro.coinbase.com/products/';

export default class CandleSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candles: [],
      currency: 'BTC',
      baseCurrency: 'USD',
    };
  }

  componentDidMount() {
    const { currency, baseCurrency } = this.state;

    fetch(`${APIURL}${currency}-${baseCurrency}/candles?granularity=3600`)
    .then(res => res.json())
    .then(candles => this.setState({ candles }));
  }

  render() {
    const { candles, currency, baseCurrency } = this.state;

    return (
      <div className="CandleSize">
        {candles.map(candle =>
          <Candle
            time={candle[0]}
            low={candle[1]}
            high={candle[2]}
            open={candle[3]}
            close={candle[4]}
          />
        )}
      </div>
    );
  }
}
