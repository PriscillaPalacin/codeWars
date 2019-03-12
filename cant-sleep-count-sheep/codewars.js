// <!-- Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. -->

var countSheep = function (num){
  //your code here

  var counting = ""
  for ( var i = 0; i < num; i++ ) {
    counting += ( i + 1 ) + " sheep...";
  }

  return counting;
}

countSheep(3);

Test.assertEquals(countSheep(1), "1 sheep...");
Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");
