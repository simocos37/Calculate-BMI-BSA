import React from 'react';
import { BMIProps } from '../interfaces';

const BMI: React.FC<BMIProps> = ({ weightKg, heightCm }) => {
  const bmi = (weightKg / ((heightCm / 100) ** 2)).toFixed(2);

  return (
    <div>
      <h2>BMI: {bmi}</h2>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BMI;