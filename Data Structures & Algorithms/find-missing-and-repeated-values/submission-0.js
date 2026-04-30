class Solution {
    /**}
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const size = n * n;
    const count = new Array(size + 1).fill(0);
    
    // Count occurrences of each number
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
        count[grid[i][j]]++;
        }
    }
    
    let repeated, missing;
    for (let i = 1; i <= size; i++) {
        if (count[i] === 2) repeated = i;
        if (count[i] === 0) missing = i;
    }
    
    return [repeated, missing];
    }
}