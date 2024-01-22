<<<<<<< HEAD
// new array is created for re-indexing items for rotation
// identify the new index using the modulo operator in case of carry situations
// copy rotatedArray back over

=======
>>>>>>> ee2bba0 (leetcode solutions)
class Solution {
  public void rotate(int[] nums, int k) {
      int[] rotatedArray = new int[nums.length];
      
      for (int i = 0; i < nums.length; i++) {
          int newIndex = (i + k) % nums.length;
          rotatedArray[newIndex] = nums[i];
      }

      // copy values over to original array
      for (int i = 0; i < nums.length; i++) {
          nums[i] = rotatedArray[i];
      }
  }
}