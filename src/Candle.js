import React from 'react';

const Candle = ({ time, low, high, open, close, max, min }) => {
  const color = (open - close) > 0 ? "red" : "green";

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
        y1={high}
        x2="10"
        y2={low}
        stroke={color}
      />
      <rect
        fill={color}
        y={open > close ? open : close}
        className="Candle"
        width='20'
        height={Math.abs(open - close)}
      />
    </svg>
  );
};

const normalize = (value, max, min) => Math.floor((value - min) / (max - min) * 500);

export default Candle;
