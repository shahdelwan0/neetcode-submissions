class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for (let i=nums.length-1; i>= 0; i--){
    for (let j=nums.length-1; j>=0; j--) {
    if (nums[j] < nums[j-1]) {
      [nums[j], nums[j-1]]=[nums[j-1], nums[j]]
      }
    }
    }
    return nums
    }
}
