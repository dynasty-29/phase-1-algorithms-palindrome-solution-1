function isPalindrome(word) {
  // Write your algorithm here
  const finalWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reverseWord = finalWord.split('').reverse().join('');

  return reverseWord === finalWord;
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));
console.log(isPalindrome("robot"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("repaper"));
console.log(isPalindrome("deed"));
console.log(isPalindrome("peep"));
/* 
  Add your pseudocode here
    1. The function should take the word as an argument
    2. It should return true is the word is the same as the word in reverse
    3. If its not it should return false
*/


/*
  Add written explanation of your solution here
  a. I need a variable that stores the word when i:
        First i want to remove any case sensitivity so i convert the word to lower case.
        Next i want any special character not to affect the reading of the word so i will replace any special character or number with space.
        That done now i will reverse the word that now stored in the new variable i created 
        I should first split so its letter each then reverse and finally join to form a new word stored in a new variable as reverse


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
