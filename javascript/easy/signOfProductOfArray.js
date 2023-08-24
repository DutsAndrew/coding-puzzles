const puzzle = 'https://leetcode.com/problems/sign-of-the-product-of-an-array/description/';

// SOLUTION:
  // This is a great solution as it multiplies each item to get the product while also converting them to their signed
  // number. The final signed version of the product is returned at the end. This avoids exceeding the JavaScript
  // calculation limit for longer arrays.

var arraySign = function(nums) {

  let sign = 1;
  
  for (let i = 0; i < nums.length; i++) {
      sign *= Math.sign(nums[i]);
  };

  return sign;
};

// DATA
  // Runtime: beats 90.35% @ 53 Ms
  // Memory: beats 73.68% @ 42.7 Mb