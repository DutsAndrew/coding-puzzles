const puzzle = 'https://leetcode.com/problems/valid-palindrome/description/';

var isPalindrome = function(s) {
  // lowercase everything, remove punctuation, then remove all spaces
  s = s.toLowerCase();
  s = s.replaceAll(/[^a-zA-Z0-9]/g,"");
  s = s.replaceAll(' ', '');

  if (s === s.split("").reverse().join("")) {
      // convert to array, reverse, convert to string
      // is palindrome
      return true;
  } else {
      return false;
  };
};

// DATA
  // Runtime: Beats 94.50% @ 61 Ms
  // Memory: Beats 39.38% @ 46.7 Mb