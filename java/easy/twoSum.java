import java.util.HashMap;
import java.util.Map;

// brute force solution with O(n^2) complexity, which is not great for larger arrays
class FirstSolution {
  public int[] twoSum(int[] nums, int target) {
      int[] sum = new int[2];

      for (int i = 0; i < nums.length - 1; i++) {
          for (int j = i + 1; j < nums.length; j++) {
              if (nums[i] + nums[j] == target) {
                  sum[0] = i;
                  sum[1] = j;
                  return sum;
              };
          };
      };

      return sum;
  };
};

// hashmap solution to reduce this to one iteration
class BetterSolution {
  public int[] twoSum(int[] nums, int target) {
      Map<Integer, Integer> numbersMap = new HashMap<>();
      
      for (int i = 0; i < nums.length; i++) {
          int compliment = target - nums[i];
          if (numbersMap.containsKey(compliment)) {
              return new int[]{numbersMap.get(compliment), i};
          };
          numbersMap.put(nums[i], i);
      };
      return new int[0];
  };
};