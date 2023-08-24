const puzzle = 'https://leetcode.com/problems/climbing-stairs/description/';

// SOLUTION
  // the options of stairs that can be climbed increments by 1 from n = 1 to n = 3, from n = 4 on the
  // solutions exponentially grow, making this easier to solve by calculating the growth and adding it to the array
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let options = [1, 2];
  for (let i = 2; i < n; i++) {
      options[i] = options[i-1] + options[i-2];
  };
  return options[n-1];
};

// DATA
  // Memory: beats 50.75% @ 41.8 mb
  // Runtime: beats 24.6% @ 64 ms