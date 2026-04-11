class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    /**
 * @param {number[]} nums
 * @return {number}
 */
pivotIndex(nums) {
    // Step 1: Calculate total sum in one pass
    let totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    let leftSum = 0;
    
    // Step 2: Single pass to find pivot
    for (let pivot = 0; pivot < nums.length; pivot++) {
        // rightSum = total - left - current element
        let rightSum = totalSum - leftSum - nums[pivot];
        
        if (leftSum === rightSum) {
            return pivot;
        }
        
        // Update leftSum for next iteration
        leftSum += nums[pivot];
    }
    
    return -1;
}
}
