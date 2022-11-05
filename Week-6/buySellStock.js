var maxProfit = function (prices) {

  let min = Number.MAX_SAFE_INTEGER 
  let profit = 0

  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < min){
      min = prices[i]
    } else if( prices[i] - min > profit ){
        profit = prices[i] - min
    }
  }
  console.log(profit)
  return profit

};

maxProfit([7,1,5,3,6,4])