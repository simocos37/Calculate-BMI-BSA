export const kgToStonePounds = (kg: number) => {
    const totalPounds = kg * 2.20462;
    const stone = Math.floor(totalPounds / 14);
    const pounds = (totalPounds % 14).toFixed(2);
    return { stone, pounds };
  };

export const stonePoundsToKg = (stone: number, pounds: number) => {
    return (stone * 14 + pounds) / 2.20462;
  };

export const cmToFeetInches = (cm: number) => {
    const totalInches = cm / 2.54;
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(2);
    return { feet, inches };
  };

export const feetInchesToCm = (feet: number, inches: number) => {
    return (feet * 12 + inches) * 2.54;
  };