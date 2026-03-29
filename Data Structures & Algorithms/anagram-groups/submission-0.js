class Solution {
  groupAnagrams(strs) {
    const isAnagram = (s, t) => {
      return s.split("").sort().join("") === t.split("").sort().join("");
    }

    let final = [];
    for (let i = 0; i < strs.length; i++) {
      let subArray = [];

      for (let j = 0; j < strs.length; j++) {
        if (isAnagram(strs[i], strs[j])) {
          subArray.push(strs[j])
        }
      }
      subArray.sort()
      final.push(subArray);

    }
    const unique = Array.from(
      new Set(final.map(arr => JSON.stringify(arr)))
    ).map(str => JSON.parse(str));

    return unique;
  }
}