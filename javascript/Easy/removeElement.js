// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,,]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
//
// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,,,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// FIRST ATTEMPT
  // PROBLEM
  // I was running into issues returning the last item correctly,
  // the problem also expected the number of items not removed to be
  // returned. So I had to rework what I wrote.

var firstAttempt = function(nums, val) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
      // exit conditions when on last item in array
      if ((i === nums.length -1) && nums[start] === val) {
          nums.length = nums.length - 1;
          break;
      };

      // normal loop conditions to modify array
      if (nums[start] === val) {
          nums[start] = nums[start+1];
          nums.length = nums.length - 1;
      } else {
          start++;
      };
  };
  return nums.length;
};

// SUCCESSFUL ATTEMPT
// This solution works well because it retains the number of unique items
// in k and returns k at the end
var removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
          nums[k] = nums[i];
          k++;
      }
  }
  return k;
};

// LEETCODE STATS:
  // Memory: beat 51.63% @ 42 MB/s
  // Runtime: beat 78% @ 56 ms