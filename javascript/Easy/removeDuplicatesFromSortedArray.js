const nums1 = [1,1,2];
// output: 2, nums = [1,2,_]
  // Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).

const nums2 = [0,0,1,1,1,2,2,3,3,4];
// output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
  // Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
  // It does not matter what you leave beyond the returned k (hence they are underscores).

// ATTEMPT 1 ****************************************************
const originalSolution = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    const pointer = nums[i];
    // loop through remaining list
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === pointer) {
        nums.splice(nums.indexOf(nums[j]), 1);
        nums.push('_');
      };
    };
  };

  // find unique numbers count
  let uniqueNums = 0;
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] !== '_') uniqueNums++;
  };

  return {
    uniqueNums,
    nums
  };
};

// ATTEMPT 2 ****************************************************
// this method works better as running a loop within a loop in Attempt 1 was causing mistakes to slip into 
// the solution. A Hash table works better since you can set a key/value in a hash table and you don't have to loop
// back through since you can check/add values as you go reducing the complexity by at least 50% by removing the 
// second for loop.

const secondSolution = (nums) => {
  const hashTable = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = true;
      result.push(nums[i]);
    };
  };

  return result;
};

// ATTEMPT 3 ***************************************************
// attempt 2 was a valid solution, but the leetcode problem wanted the original array to be modified and resized
// as you went. So this is the final solution. This solution writes over any duplicates as it loops, successfully
// removing any duplicates as it goes.
const removeDuplicates = (nums) => {
  let uniqueNums = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueNums]) {
      uniqueNums++;
      nums[uniqueNums] = nums[i];
    }
  }
  nums.length = uniqueNums + 1;
  return uniqueNums + 1;
};

console.log(removeDuplicates(nums1));
console.log(removeDuplicates(nums2));

// Submission Details:
  // Beat Average Runtime By: 93.85% at 62 ms
  // Beat Average Memory Usage By: 60.39% at 44.7 MB