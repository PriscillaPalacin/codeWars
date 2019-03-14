// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  // your code
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8]
  let sum = 0;
  for(i=0; i<arr.length; i++) {
  sum += arr[i] * arr[i]
  }
  let num = Math.floor(Math.sqrt(sum)/2);
  return num;

}
Test.assertEquals(predictAge(65,60,75,55,60,63,64,45), 86);
