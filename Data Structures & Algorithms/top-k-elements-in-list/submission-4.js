class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // Base Map value --> occurances 
        let map = new Map()
        nums.forEach(x => {
            if(!map.get(x)){
                map.set(x, 1)
            }else{
                let val = map.get(x)
                map.set(x, val + 1)
            }
        })

        // Enhanced Map value <-- occurances 
        let revKeyMap = new Map()
        for (let key of Array.from(map.keys())){
            let finalKey = map.get(key)
            if(!revKeyMap.get(finalKey)){
                revKeyMap.set(finalKey, [])
            }

            revKeyMap.get(finalKey).push(key)
            

        }

        // Take top most keys from map and check the vals in them till k is reached
        let sortedKeys = Array.from(revKeyMap.keys()).sort((a , b) => b - a)
        let arr = []

        for(let key of sortedKeys){
            let values = revKeyMap.get(key)
            if(values && values.length + arr.length <= k) arr.push(...values)
        }

        return arr
    }
}
