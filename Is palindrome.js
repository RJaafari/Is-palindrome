function isPalindrome(word) {
  word = word.toLowerCase();
  if (word.length <= 1) {
    return true;
  }
  if (word[0] === word[word.length - 1]) {
      return isPalindrome(word.slice(1, word.length - 1));
  } else {
    return false;
  }
}