// how many stairs will Suziki climb in 20 years?

function stairsIn20(s){
  let totalSteps = 0;
  // looping through an array of the days
  s.forEach(function(day){
  // variable to hold the number of steps taken on a day for a year
  let nums = 0;
  // looping through the steps
    day.forEach(function(steps) {
    // variable + the steps in the array
      nums += steps
    })
    // the value of total steps + the number of steps * 20yrs
    totalSteps += nums * 20
  })
  return totalSteps
}
