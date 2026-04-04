class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let cleaned = s.trim().split(" ")
        let lastWord = cleaned[cleaned.length -1]
        console.log(lastWord)
        return lastWord.length
    }
}
