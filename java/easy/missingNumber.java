import java.util.Arrays;

class Solution {
    public int missingNumber(int[] nums) {
        Arrays.sort(nums);

        for (int i = 0; i < nums.length; i++) {
            if (i == nums[i]) {
                continue;
            } else {
                return i;
            }
        };
        
        if (nums.length != nums[nums.length-1]) {
            return nums[nums.length-1] + 1;
        };

        return 0;
    };
};