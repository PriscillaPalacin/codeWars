//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

function positiveSum(arr) {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      return accumulator + currentValue;
    }

    return accumulator
  }, 0)
}
