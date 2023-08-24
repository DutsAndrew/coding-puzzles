const puzzle = 'https://leetcode.com/problems/length-of-last-word/description/';

// original solution
var lengthOfLastWord = function(s) {
  let trimmedString = s.trim();
  return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

// solution without using language methods
var lengthOfLastWord = function(s) {
  // variables for storing the beginning and end of last word in string
  let head = null;
  let tail = null;
  let spaceFound = false;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') {
          spaceFound = true;
      } else {
          // no space
          // set head
          if (head === null) head = i;
          if (head !== null && spaceFound === true) {
              head = i;
              spaceFound = false;
          };
          // set tail of next value is a space or end of string
          if (s[i + 1] === ' ' || i === s.length - 1) {
              tail = i;
          };
      }
  };
  return (tail - head) + 1
};

// Thoughts:
  // The first solution is 2-3x faster, so I would not recommend the last one.

// Leetcode Data:
  // Runtime: beats 48.70% @ 60ms
  // Memory: beats 98.99% @ 41.1 Mb