class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let maxProfit = 0;
    /**
     * the sell price > buy price => buy with the lowest price
     */
   for (let buy =0; buy<prices.length; buy++){
        let newProfit=0;
        for (let sell = buy + 1; sell < prices.length; sell++) {
            if (prices[sell]>prices[buy]){
                newProfit = prices[sell] - prices[buy]
                if (newProfit > maxProfit) {
                    maxProfit = newProfit;
                }
            }
        }
   }
    // console.log(maxProfit)
    return maxProfit
}
}