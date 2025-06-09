function maxProfit(prices) {
  let maxProfit = 0;

  let left = 0;
  let right = left + 1;

  while (left < right) {
    const currMax = prices[right] - prices[left];
    if (currMax > maxProfit) {
      maxProfit = currMax;
    }

    if (right === prices.length - 1) {
      if (left === prices.length - 2) {
        return maxProfit;
      }

      left++;
      right = left + 1;
    } else {
      right++;
    }
  }

  return maxProfit;
}

function maxProfitOptimal(prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
