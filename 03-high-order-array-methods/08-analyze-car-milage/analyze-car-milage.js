function analyzeCarMileage(car) {
  const totalMileage = car.reduce((total, car) => total + car.mileage, 0);

  const averageMileage = totalMileage / car.length;

  const highestMileage = car.reduce(
    (highest, crr) => (crr.mileage > highest.mileage ? crr : highest),
    car[0]
  );

  const lowestMileage = car.reduce(
    (lowest, crr) => (crr.mileage < lowest.mileage ? crr : lowest),
    car[0]
  );

  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileage,
    lowestMileage,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
