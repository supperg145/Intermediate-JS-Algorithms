//function take number as an argument
//three variables set one to be one
//for loop starting from 2 ending at num
//change values
//return result

function Fib(num) {
  let number = 1;
  let firstNum = 0;
  let secondNum = 0;
  for (let i = 2; i <= num; i++) {
    secondNum = firstNum;
    console.log(`SecondNum is : ${secondNum} at instance ${i}\n`)
    firstNum = number;
    console.log(`firstNum is ${firstNum} at instance ${i}\n`)
    number = firstNum + secondNum;
    console.log(`Number is : ${number} at instance ${i}\n`)
  }
  return number;
}

console.log(Fib(4));
