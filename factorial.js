function factorial(num) {
 let answer = 1
  for(let i = num; i > 0; i--){
  answer *= i
 }
 console.log(answer)
  return answer;
}

// console.log(factorial(4))
module.exports = factorial;
