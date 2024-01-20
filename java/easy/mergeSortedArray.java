// Sort two merged lists by sorting from the end if you know the lengths of both.
// This prevents overwriting elements prematurely and backfills the array.
// Any remaining elements from nums2 if present are added the front.

class Solution {
  public void merge(int[] nums1, int m, int[] nums2, int n) {
      int nums1Index = m - 1;
      int nums2Index = n - 1;
      int mergeIndex = m + n - 1;

      while (nums1Index >= 0 && nums2Index >= 0) {
          if (nums1[nums1Index] > nums2[nums2Index]) {
              nums1[mergeIndex] = nums1[nums1Index];
              nums1Index--;
          } else {
              nums1[mergeIndex] = nums2[nums2Index];
              nums2Index--;
          };
          mergeIndex--;
      };

      // merge any left over in nums2
      while (nums2Index >= 0) {
          nums1[mergeIndex] = nums2[nums2Index];
          nums2Index--;
          mergeIndex--;
      };
  };
};