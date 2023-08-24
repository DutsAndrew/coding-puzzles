const nums1 = [1,2,3,1]
// Output: true

const nums2 = [1,2,3,4]
// Output: false

const nums3 = [1,1,1,3,3,4,3,2,4,2]
// Output: true



const containsDuplicate = function(nums) {
  let currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
  
      // verifies that the matching duplicate is not the same value and then returns true
      if (nums[currentIndex] === nums[i] && i !== currentIndex) {
          return true;
      }
      
      // verifies that loop has completed, increments index, starts loop again
      if (i === nums.length - 1 && currentIndex !== nums.length - 1) {
          currentIndex++;
          i = 0;
      }
      
      // verifies that all combinations have been tried, stops loop
      if (i === nums.length - 1 && currentIndex === nums.length - 1) {
          return false;
      }
  }
};

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
console.log(containsDuplicate(nums3));

// PASSED 