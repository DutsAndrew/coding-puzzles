// Initially took using a hashmap to check occurrences of a number as the approach.
// Realized it's easier since the list is already sorted to just check 2 values back and if the number is still the same,
// then you're iterating on the 3rd instance of the value. This way only the necessary values are stored.

class Solution {
  public int removeDuplicates(int[] nums) {
      int left = 2;

      for (int right = 2; right < nums.length; right++) {
          if (nums[right] != nums[left - 2]) {
              nums[left] = nums[right];
              left++;
          };
      };

      return left;
  }
}