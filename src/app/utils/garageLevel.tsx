
// add an index signature to the type of A9GarageLevelInfoData to allow indexing with a number.
interface A9GarageLevelInfoDataInterface {
  [index: number]: number;
}

// Garage level info data
// source: https://www.reddit.com/r/Asphalt9/wiki/guide/part2/#wiki_how_many_garage_level_points_do_i_have.3F
export const A9GarageLevelInfoData: A9GarageLevelInfoDataInterface = {
  1: 4000,
  2: 8000,
  3: 20000,
  4: 40000,
  5: 80000,
  6: 100000,
  7: 150000,
  8: 250000,
  9: 400000,
  10: 600000,
  11: 1000000,
  12: 1500000,
  13: 2000000,
  14: 2500000,
  15: 3000000,
  16: 3500000,
  17: 4000000,
  18: 5000000
};



const sumUptoCurrentGarageLevelMinusOne = (garageLevel: number) => {
  let totalValue: number = 0;
  for (let level = 1; level < garageLevel; level++) {
    console.log(level, A9GarageLevelInfoData[level]);
    totalValue += A9GarageLevelInfoData[level] as number;
  }
  return totalValue;
};


export const calculateGarageValue = (garageLevel: number, garageValue: number) => {
  if (garageLevel === 0 || garageLevel > 18) {
    return 0;
  }
  if (garageValue < 0) {
    return 0;
  }
  let totalValue = sumUptoCurrentGarageLevelMinusOne(garageLevel);
  totalValue += garageValue;
  return totalValue;
};


export const convertNumberToHumanReadable = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}