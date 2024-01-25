export function generateUniqueNumbersInRange (
  min: number,
  max: number,
  count: number
): number[] {
  if (max - min + 1 < count) {
    console.log('Count must be less than or equal to the range of numbers.')
    return []
  }

  const uniqueNumbers = new Set()

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    uniqueNumbers.add(randomNumber)
  }

  return Array.from(uniqueNumbers) as number[]
}
