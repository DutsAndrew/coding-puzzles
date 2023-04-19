// PROBLEM
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// FIRST AND SUCCESSFUL ATTEMPT
  // This option was optimal as the function first checks if parameter needle is found in haystack in a ternary operator
  // This allowed a quick return of a truthy or falsy case.
  // If true the function returns the index of needle and if not the default of -1 is returned
  
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
};

// LEETCODE STATS:
  // Memory: beats 48.49% @ 42MB/s
  // Runtime: beats 77.29% @ 55ms