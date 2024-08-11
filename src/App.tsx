// src/App.tsx
import React, { useState } from 'react';
import BMI from './components/BMI';
import BSA from './components/BSA';
import UnitConverter from './components/UnitConverter';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  const [weightKg, setWeightKg] = useState<number>(70);  // Default weight in kg
  const [heightCm, setHeightCm] = useState<number>(170); // Default height in cm

  return (
    <div className="app-container">
      <h1 className="title">BMI & BSA Calculator</h1>

      <div className="main-content">
        <div className="left-section">
          <UnitConverter
            weightKg={weightKg}
            setWeightKg={setWeightKg}
            heightCm={heightCm}
            setHeightCm={setHeightCm}
          />
        </div>

        <div className="right-section">
          <BMI weightKg={weightKg} heightCm={heightCm} />
          <BSA weightKg={weightKg} heightCm={heightCm} />
        </div>
      </div>
    </div>
  );
};

export default App;
