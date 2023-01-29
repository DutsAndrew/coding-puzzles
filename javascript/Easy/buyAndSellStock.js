// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a 
  //different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. 
  // If you cannot achieve any profit, return 0.

const prices1 = [7,1,5,3,6,4]
  // Output: 5
  // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

const prices2 = [7,6,4,3,1]
  // Output: 0
  // Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {

  // variables to track max profit
  let [left, right, max] = [0, 1, 0];

  // loop through all prices
  while (right < prices.length) {
    // if price on left is lower, nothing happens
    // if price on right is lower, left is switched to right, until higher number is found
    // in this case the max is now 0, until a max higher than that is found
    const canSlide = prices[right] <= prices[left];
    if (canSlide) left = right;
    
    const window = prices[right] - prices[left];
    // assess whether the current max or window is higher, set it, increment, and continue
    max = Math.max(max, window);
    right++;
  }

  return max;

}

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));