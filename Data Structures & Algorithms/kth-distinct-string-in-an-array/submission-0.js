class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
    let map = new Map();
    for (const char of arr) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    
    let filteredArray = Array.from(new Map(
      [...map].filter(([key, value]) => value === 1)
      ), ([key, value]) => (key))

      
        if (k>filteredArray.length){
      return ""
      }
    return filteredArray[k-1]


    }
}
