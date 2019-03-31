// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.


function twoSort(s) {
  //return the first value as a string with three asterisks in between each letter
    //split the string into an array

  return (s.sort().slice(0,1)[0].split("").reduce((x,y,z)=>x + "***" + y));
}
