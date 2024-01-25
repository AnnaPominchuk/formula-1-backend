import type { Driver } from './model/driver'
const fs = require('fs')
const { generateUniqueNumbersInRange } = require('./utils/utils')

export function readDb (): Driver[] {
  try {
    const rawData: string = fs.readFileSync('drivers.json')
    const jsonData: Driver[] = JSON.parse(rawData)

    const places: number[] = generateUniqueNumbersInRange(1, 21, 21)
    const driversData: Driver[] = places.length > 0
      ? jsonData.map((driver, idx) => ({
        ...driver,
        imgUrl: `${driver.code.toLowerCase()}.png`,
        place: places[idx]
      }))
      : []

    console.log(`Driver data length: ${driversData.length}`)
    return driversData
  } catch (error) {
    console.log(`Error occurred during reading drivers data: ${String(error)}`)
    return []
  }
}
