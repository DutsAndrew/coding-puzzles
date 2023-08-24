// PROBLEM
  // Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.
//
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2
//
// Example 2:
//
// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
// Example 3:
//
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// ATTEMPT AND SUCCESS
  // Works well with return an immediate position of it already exists. If it doesn't it calls another function by the falsy return of the
  // ternary operator. The function then finds a value that is greater than the target and inserts it at that location

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // instantly return index if available, otherwise find it
  return nums.includes(target) ? nums.indexOf(target) : findInsertOrder();

  function findInsertOrder() {
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] > target) {
              return nums.indexOf(nums[i]);
          };
      };
      // insert is at end
      return nums.length;
  };
};

// LEETCODE DATA:
  // Memory: beats 77.9% @ 41.9Mb
  // Runtime: beats 24.40% @ 67Ms