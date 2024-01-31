function factorial(num) {
 let sum = 1
  for(let i = num; i > 0; i--){
  sum *= i
 }
 console.log(sum)
  return sum;
}

// console.log(factorial(4))
module.exports = factorial;
