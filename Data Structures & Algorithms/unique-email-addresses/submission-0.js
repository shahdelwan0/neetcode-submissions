class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails) {
        let result = []
        for (let i=0; i<emails.length; i++) {
            let [localName, domainName] = emails[i].split("@");
            localName = localName.replace(/\.|\+.*/g, '');
            let email = localName+"@"+domainName
            result.push(email)
            }
        return new Set(result).size    
    }
}
