class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let map = new Map()

        for(let str of strs){
            let key = str.split('').sort().join('')
            if(!map.get(key)){
                map.set(key, [])
            }

            map.get(key).push(str)

            
        
        }
        let arr = []
        for(let key of Array.from(map.keys())){
            arr.push(map.get(key))
        
        }
        return arr
    }

}
