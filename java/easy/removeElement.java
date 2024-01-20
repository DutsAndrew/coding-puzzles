// Java doesn't have array methods like js and python to easily slice or remove an element.
// So I took the two pointer approach to reassign values of the array using the left and right indexes as I loop through.

class Solution {
  public int removeElement(int[] nums, int val) {
      int left = 0;

      for (int right = 0; right < nums.length; right++) {
          if (nums[right] != val) {
              nums[left] = nums[right];
              left++;
          };
      };

      return left;
  }
};