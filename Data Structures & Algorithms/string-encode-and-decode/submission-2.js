class Solution {
    
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let finalStr = ""
        for (let str of strs){
            finalStr = finalStr + 'ñ' + str // Addition of a non ascii char
        }
        return finalStr
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str.split('ñ'))
       let arr = str.split('ñ')
            arr.shift()
        return arr


    }
}
