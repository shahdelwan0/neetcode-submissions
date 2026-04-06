class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

       
  let prefix = "";

  for (let j = 0; j < strs[0].length; j++) {
    let char = strs[0][j];

    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
    }

