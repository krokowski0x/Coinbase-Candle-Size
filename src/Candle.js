import React from 'react';
import './Candle.css';

const Candle = ({ time, low, high, open, close }) => {
  let height = (high - low) / 100;
  if (height > 500) height = 500;
  return (
    <svg
      width="20"
      height="500"
    >
      <line
        x1="10"
        y1="0"
        x2="10"
        y2={height}
        stroke="black"
      />
      <rect
        className="Candle"
        width='20'
        height={Math.abs(open - close) / 100}
      />
    </svg>
  );
}

export default Candle;
