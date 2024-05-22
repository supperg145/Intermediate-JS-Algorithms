//Wednesday : Title Case a Sentence
//Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase.
//
//For the purpose of this exercise, you should also capitalize on connecting words like "the" and "of".
//
//For this algorithm, you can use the split() method.
function capitalizeString(string) {
  let lowerCaseArray = string.toLowerCase().split(" ");
  for (let i = 0; i < lowerCaseArray.length; i++) {
    lowerCaseArray[i] =
      lowerCaseArray[i].charAt(0).toUpperCase() + lowerCaseArray[i].slice(1);
  }
  return lowerCaseArray.join(" ");
}

console.log(capitalizeString("I'm a little tea pot"));
