class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // const set1 = new Set(nums)
        // let map = new Map()
        // let jh = 0;
        // for (const num of nums){
        //     let ex = num
        //     if(!map.get(num)){map.set(num, [jh])}
        //     else{ map.get(num).push(jh) }
        //     jh++
        // }
        // let allKeys = Array.from(map.keys()).sort((a,b) => a - b)

        for (let i = 0; i< nums.length; i++){
            for (let j = i + 1; j< nums.length; j++){
                if(nums[i]+nums[j] == target){
                    return [i,j]
                    
                }
            

            
        }
            
        }
    



    }
}
