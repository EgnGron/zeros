module.exports = function getZerosCount(number) {
// Stirling formula
// function stirlingFormula(n) {
//   return Math.sqrt(2*Math.PI*n)* Math.pow(n/Math.E, n)
// }

// 1! = 1
// 2! = 2
// 3! = 6
// 4! = 24
// 5! = 120 -> 1 

var result = 0

if (number > 1 && number < Math.pow(10,8)) {
  const step = 5
  var index = step

  do {
    value = number/index    
    result += value >> 0.5
    index = index * step      
  } 
  while (value >= 1) 

}

return result
}
