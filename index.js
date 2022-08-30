function isPalindrome(word) {
  // iteration of the string from start to the middle
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      // compare iterated letters to the corresponding letter at the end of the string
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
          // if they don't correspond, return false
          return false;
      }
  }

  // else if all the letters match, return true
  return true;
}

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