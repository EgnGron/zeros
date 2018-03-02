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
      while(number > 0) {
        number = (number/5)>>0.5;
        result += number;
      }
  }
return result
}
