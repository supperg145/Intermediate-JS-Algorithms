//Largest Number in Arrays
//Return an array consisting of the largest number from each provided sub-array. 
//For simplicity, the provided array will contain exactly 4 sub-arrays.
//
//Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

//iterate through the array and then iterate through the first array
//push the biggest value from the inner array into an empty array

function largestOfFour(arr) {
    let largestNumbers = []
    for(let i = 0; i < arr.length; i++) {
        largestNumbers.push(arr[i][0])
        for(let j = 0; j < arr[i].length; j++){
            if(largestNumbers[i]< arr[i][j]){
                largestNumbers[i] = arr[i][j]
            }
        }
        
    }
    
    return largestNumbers;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //Returns [5,27,39,1001]