import React from 'react';

const DiagonalHatchPattern: React.FC = () => (
  <svg width="0" height="0">
    <defs>
      <pattern
        id="diagonalHatch"
        patternUnits="userSpaceOnUse"
        width="16"
        height="16"
        patternTransform="rotate(45)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="16"
          style={{ stroke: 'red', strokeWidth: 4 }}
        />
      </pattern>
    </defs>
  </svg>
);

export default DiagonalHatchPattern;
