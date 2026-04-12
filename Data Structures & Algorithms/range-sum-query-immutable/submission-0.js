class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sum = 0
        while (left <= right) {
            sum += this.nums[left]
            left ++
        }
      return sum
    }
}