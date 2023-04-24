import React from 'react';
import './IconHex.css';

const IconHex = () => (
  <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Hexagon</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <polygon
          className="hexagon"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        <text
          x="39"
          y="50"
          textAnchor="middle"
          fontSize="28"
          fontWeight="bold"
          fill="#ffffff"
        >
          N
        </text>
      </g>
    </g>
  </svg>
);

export default IconHex;
