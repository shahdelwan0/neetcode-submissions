class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // console.log(nums.length)
        // console.log(new Set(nums).size)
        return nums.length !== new Set(nums).size

    }
}
