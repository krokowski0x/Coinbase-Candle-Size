import React from 'react';
import './Candle.css';

const Candle = ({ time, low, high, open, close, max, min }) => {
  const color = (open - close) > 0 ? "green" : "red";

  low = normalize(low, max, min);
  high = normalize(high, max, min);
  open = normalize(open, max, min);
  close = normalize(close, max, min);

  return (
    <svg
      width="20"
      height="500"
    >
      <line
        x1="10"
        y1="0"
        x2="10"
        y2={Math.floor(high - low)}
        stroke={color}
      />
      <rect
        fill={color}
        y={high - (open > close ? open : close)}
        className="Candle"
        width='20'
        height={Math.abs(open - close)}
      />
    </svg>
  );
};

const normalize = (value, max, min) => ((value - min) / (max - min) * 500);

export default Candle;
