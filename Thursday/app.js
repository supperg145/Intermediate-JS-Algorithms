//Thursday: Sum All Numbers in a Range
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

//sum up the numbers starting from smallest number with the length of the array big number

function sumAll(arr) {
  let sum = 0;
  if (arr[0] < arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  }
  if (arr[0] > arr[1]) {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
  }
  if (arr[0] === arr[1]) {
    sum = arr[0];
  }
  console.log(sum);
}
sumAll([1, 4]);
sumAll([-1, 1]);
sumAll([4, 1]);
sumAll([5, 10]);

function sumEverything (arr) {
    let start = Math.min(...arr)
    let end = Math.max(...arr)

    let sum = 0

    for(let i = start; i <= end; i++){
        sum += i
    }

    console.log(sum)
}

sumEverything([1, 4]);
sumEverything([-1, 1]);
sumEverything([4, 1]);
sumEverything([5, 10]);
