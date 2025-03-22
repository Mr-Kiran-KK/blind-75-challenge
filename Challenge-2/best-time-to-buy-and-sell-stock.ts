function maxProfit(prices: number[]): number {
  let left: number = 0;
  let right: number = 1;
  let currentProfit: number = 0;

  while (right !== prices.length) {
    if (prices[right] > prices[left]) {
      // push to currentProfit if currentProfit less than new Profit
      const newProfit = prices[right] - prices[left];
      if (newProfit > currentProfit) {
        currentProfit = newProfit;
      }

      right++;
    } else {
      left++;
      right++;
    }
  }
  return currentProfit;
}
