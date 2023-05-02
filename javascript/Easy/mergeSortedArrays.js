const puzzle = '';

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// Solution:
  // On the first attempt I attempted to solve the problem from the beginning of each array to the end
  // I ran into issues with having to shift the arrays and realized that is not the optimal solution. So I rewrote
  // and worked on the rest of the code with the help of online solutions to instead sort the arrays from the end
  // to the front. This is more optimal you know nums1 with have as many indexes as m + n - 1, so you can sort both
  // arrays from the end and then place them in that [k] spot and then decrement k as you continue looping.

var merge = function(nums1, m, nums2, n) {
  let i = m - 1; // index of last element in nums1
   let j = n - 1; // index of last element in nums2
   let k = m + n - 1; // index of last empty position in nums1

   while (j >= 0) {
       if (i >= 0 && nums1[i] > nums2[j]) {
           nums1[k] = nums1[i];
           i--;
       } else {
           nums1[k] = nums2[j];
           j--;
       };
       k--;
   }
};

// Data:
  // Runtime: Beats 87.25% @ 53 Ms
  // Memory: Beats 97.72% @ 41.4 Mb