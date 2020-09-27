/**
 * getOdds(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only ODD numbers.
 *
 * e.g.
 * getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [1, 3, 5, 7, 9]
 * getOdds([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [11, 35, 601, 777, 999]
 */
function getOdds(numbers) {
  const l = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 != 0){
      l.push(numbers[i])
    }
  }
  return l
}
console.log(getOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
/**
 * getEvens(numbers):
 * - receives an array of numbers called `numbers`
 * - filters the `numbers` array in order to...
 * - returns an array of only EVEN numbers.
 *
 * e.g.
 * getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> [2, 4, 6, 8]
 * getEvens([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> [52, 14, 56, 888]
 */
function getEvens(numbers) {
  const l = []
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 == 0){
      l.push(numbers[i])
    }
  }
  return l
}
console.log(getEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]))

/**
 * getDuplicateCount(x, numbers):
 * - receives a number `x`, and an array of numbers called `numbers`
 * - returns the number of times `x` occurs in `numbers`.
 *
 * e.g.
 * getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]) -> 4
 * getDuplicateCount(52, [11, 35, 52, 14, 56, 601, 52, 777, 888, 999, 52]) -> 3
 */
function getDuplicateCount(x, numbers) {
  let count = 0
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == x){
      count++
    }
  }
  return count
}
console.log(getDuplicateCount(1, [1, 2, 3, 1, 4, 5, 6, 1, 7, 8, 9, 10, 11, 1, 12, 13]))
/**
 * youGottaCalmDown(s):
 * - receives a string `s`
 * - returns the string `s` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(s) {
  let str1 = ""
  for (let i = 0; i < s.length; i++){
    if (s[i] != "!"){
      str1 += s[i]
    }
  }
  return str1 + "!"
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"))
module.exports = { getOdds, getEvens, getDuplicateCount, youGottaCalmDown };
