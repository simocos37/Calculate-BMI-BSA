import React, { useState, useEffect } from 'react';
import { kgToStonePounds, cmToFeetInches, stonePoundsToKg, feetInchesToCm } from '../utils';

interface UnitConverterProps {
  weightKg: number;
  setWeightKg: React.Dispatch<React.SetStateAction<number>>;
  heightCm: number;
  setHeightCm: React.Dispatch<React.SetStateAction<number>>;
}

const UnitConverter: React.FC<UnitConverterProps> = ({
  weightKg,
  setWeightKg,
  heightCm,
  setHeightCm,
}) => {

  const { stone, pounds } = kgToStonePounds(weightKg);
  const { feet, inches } = cmToFeetInches(heightCm);

  const [weightStone, setWeightStone] = useState<number>(stone);
  const [weightPounds, setWeightPounds] = useState<number>(parseFloat(pounds));
  const [heightFeet, setHeightFeet] = useState<number>(feet);
  const [heightInches, setHeightInches] = useState<number>(parseFloat(inches));

  useEffect(() => {
    setWeightStone(stone);
    setWeightPounds(parseFloat(pounds));
    setHeightFeet(feet);
    setHeightInches(parseFloat(inches));
  }, [weightKg, heightCm, stone, pounds, feet, inches]);

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStone = parseFloat(e.target.value);
    setWeightStone(newStone);
    const updatedWeightKg = stonePoundsToKg(newStone, weightPounds);
    setWeightKg(updatedWeightKg);
  };

  const handlePoundsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPounds = parseFloat(e.target.value);
    setWeightPounds(newPounds);
    const updatedWeightKg = stonePoundsToKg(weightStone, newPounds);
    setWeightKg(updatedWeightKg);
  };

  const handleHeightFeetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFeet = parseFloat(e.target.value);
    setHeightFeet(newFeet);
    const updatedHeightCm = feetInchesToCm(newFeet, heightInches);
    setHeightCm(updatedHeightCm);
  };

  const handleHeightInchesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInches = parseFloat(e.target.value);
    setHeightInches(newInches);
    const updatedHeightCm = feetInchesToCm(heightFeet, newInches);
    setHeightCm(updatedHeightCm);
  };

  return (
    <div>
      <div>
        <h3>Weight</h3>
        <label>Kg: </label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(parseFloat(e.target.value))}
        />

        <h3>Stone + Pounds</h3>
        <label>Stone: </label>
        <input
          type="number"
          value={weightStone}
          onChange={handleWeightChange}
        />
        <br />
        <label>Pounds: </label>
        <input
          type="number"
          value={weightPounds}
          onChange={handlePoundsChange}
        />
      </div>

      <div>
        <h3>Height</h3>
        <label>Cm: </label>
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(parseFloat(e.target.value))}
        />

        <h3>Feet + Inches</h3>
        <label>Feet: </label>
        <input
          type="number"
          value={heightFeet}
          onChange={handleHeightFeetChange}
        />
        <br />
        <label>Inches: </label>
        <input
          type="number"
          value={heightInches}
          onChange={handleHeightInchesChange}
        />
      </div>
    </div>
  );
};

export default UnitConverter;
