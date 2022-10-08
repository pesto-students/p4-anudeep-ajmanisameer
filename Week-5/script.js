

var maxProfit = function (prices) {
  let profit = 0
  let length = prices.length
  for (let i = 1; i < prices.length; i++) {
    //assuming we already bought the share
    // console.log(prices[i])

    if (prices[i] > prices[i - 1]) {
      profit = profit + (prices[i] - prices[i - 1])
    }
    console.log(prices[i] - prices[i - 1])

  }
  // console.log(profit)
};



maxProfit([3, 6, 7, 1, 9, 5])