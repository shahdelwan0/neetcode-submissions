class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {

        let res
        let maxRes=0
        let freq = new Map()
        for(const num of arr){
          freq.set(num, (freq.get(num)||0)+1)
          }
          
        freq.forEach((value, key)=> {
          if(value === key) {
            res = key
            }
                    if(res> maxRes) {
              maxRes= res
              }
          })
        
      return maxRes || -1
    }
}
