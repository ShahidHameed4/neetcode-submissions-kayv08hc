class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let arr = s.split(/[^a-zA-Z0-9]+/).join('').toLowerCase().split('')
        //console.log(arr)
        let j = arr.length - 1
        for (let i=0; i< arr.length; i++){
            if(i>=j){ return true}
            else if(arr[i]!=arr[j]) return false
            j--
        }
        if (s.length == 0) return false
        else return true

    }
}
