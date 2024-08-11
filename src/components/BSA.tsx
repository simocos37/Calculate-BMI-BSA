import React from 'react';
import { BSAProps } from '../interfaces';

const BSA: React.FC<BSAProps> = ({ weightKg, heightCm }) => {
  const bsa = Math.sqrt((heightCm * weightKg) / 3600).toFixed(2);

  return (
    <div>
      <h2>BSA: {bsa} m²</h2>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BSA;