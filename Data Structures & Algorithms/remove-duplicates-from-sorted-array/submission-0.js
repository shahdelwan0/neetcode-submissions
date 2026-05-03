class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
 removeDuplicates(nums) {
  if (nums.length === 0) return; // Handle edge case: empty array
  
  let k = 1;
  
  // Try using a different approach to iterate and modify the array in place
  for (let i = 1; i < nums.length; i++) {
    // Check if the current element is different from the previous one
    if (nums[i] !== nums[k-1]) {
      // If it's different, copy it to the next position
      nums[k] = nums[i];
      k++;
    }
  }
  return k
  // After the loop, k will be the number of unique elements
  // You can use this information to modify the array or return k
}

}
