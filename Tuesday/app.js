/*Find the longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms, you are allowed to use the split() method.*/

//declare a function that takes a string as an argument
//split string into array
//search in array for longest word
//return length

function longestWord(string) {
  let wordsArray = string.split(" ");
  let longestWord = "";
  /*console.log(wordsArray)*/
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  console.log(
    `The longest word is ${longestWord} and the length is ${longestWord.length}`
  );
}
longestWord("The quick brown fox jumped over the lazy dog");
