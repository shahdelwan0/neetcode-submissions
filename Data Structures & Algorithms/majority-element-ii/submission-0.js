class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
    let result=[]
    let freq = new Map();
    for(const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    freq.forEach((value, key)=> {
      if(value > nums.length/3) {
        result.push(key)
        }
      })
      
    return result
    }
}