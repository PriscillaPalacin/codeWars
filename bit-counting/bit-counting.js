let countBits = function(n) {
  // Program Me
  let x= n.toString(2)
  let counter= 0;
  for (i =0; i < x.length; i++){
    if (x[i] === "1"){
      counter++
    }
  }
  return counter;
};
