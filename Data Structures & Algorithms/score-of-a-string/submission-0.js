class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        return s.split("").reduce((accumulator, currentValue, index, arr) => {
                if (index == 0) return 0;
                const prevCharCode = arr[index - 1].charCodeAt(0);
                const currCharCode = currentValue.charCodeAt(0);
                return accumulator + Math.abs(prevCharCode - currCharCode);
            }, 0);
    }
}
