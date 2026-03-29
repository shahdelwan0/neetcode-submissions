class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
          for (let i = 0; i < arr.length; i++) {
    let max = -1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    arr[i]=max
  }
  console.log(arr)
  return arr
  }
}