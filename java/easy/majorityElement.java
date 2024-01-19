// Took the Boyer-Moore Voting Algorithm approach. You set the value you're looping through as the candidate.
// If the next value in the loop is the candidate increment the count of the item.
// If the next value isn't decrement the count.
// If count is 0 then set the new candidate as that value.
// At the end of the loop the majority value should be found.

class Solution {
  public int majorityElement(int[] nums) {

      int candidate = 0;
      int count = 0;

      for (int i = 0; i < nums.length; i++) {

          if (count == 0) {
              candidate = nums[i];
              count++;
              continue;
          };

          if (candidate == nums[i]) {
              count++;
              continue;
          } else {
              count--;
              continue;
          }
      };

      return candidate;
  }
}