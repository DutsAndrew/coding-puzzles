class Solution {
  public int maxProfit(int[] prices) {
      if (prices.length <= 1) return 0;

      int left = 0, right = 1, max = 0;

      while (right < prices.length) {
          boolean canSlide = prices[right] <= prices[left];
          if (canSlide) left = right;

          int window = prices[right] - prices[left];
          max = Math.max(max, window);
          right++;
      }

      return max;
  }
}