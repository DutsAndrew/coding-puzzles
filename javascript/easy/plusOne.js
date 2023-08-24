const puzzle = 'https://leetcode.com/problems/plus-one/description/';

// SOLUTION
  // This solution works well as it increments the final number if it is not a 9 and breaks the loop
  // if the number is not a 9 it sets the value to 0 and then either increments the next number during the loop
  // or it keeps going until it's able to add a 1 to the beginning
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
          digits[i]++;
          break;
      } else {
          digits[i] = 0;
      }
  }
  if (digits[0] === 0) {
      digits.unshift(1);
  }
  return digits;
};

// DATA
  // Runtime: beats 74.63% @ 56 ms
  // Memory: beats 68.53% @ 41.9 mb