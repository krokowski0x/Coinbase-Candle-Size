import React, { Component } from 'react';
const APIURL = 'https://api-public.sandbox.pro.coinbase.com/products/BTC-USD/candles';

export default class CandleSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candles: {},
    };
  }

  componentDidMount() {
    fetch(APIURL, {
      granularity: 3600
    })
    .then(res => res.json())
    .then(candles => this.setState({ candles }));
  }

  render() {
    return (
      <div>
        <h2>Candles</h2>
      </div>
    );
  }
}
