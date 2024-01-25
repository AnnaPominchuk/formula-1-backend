const fs = require('fs');
const { generateUniqueNumbersInRange } = require('./utils/utils');
import { Driver } from './model/driver';

export function readDb() {
  const rawData = fs.readFileSync('drivers.json');

  const jsonData: Driver[] = JSON.parse(rawData);

  const places = generateUniqueNumbersInRange(1, 21, 21);
  const modifiedData: Driver[] = jsonData.map((driver, idx) => ({
    ...driver,
    imgUrl: `${driver.code.toLowerCase()}.png`,
    place: places[idx],
  }));

  // console.log(modifiedData);
  return modifiedData;
}
