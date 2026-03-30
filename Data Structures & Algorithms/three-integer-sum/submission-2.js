class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let map = new Map()
        let i = 0
        for(const num of nums){
            if (!map.get(num)){
                map.set(num, [])
            }

            map.get(num).push(i)
            i++

        }

        let finalArray = new Set()


        for(i=0; i < nums.length - 2; i++){

            for(let j = i+1; j<nums.length - 1; j++){
                let reqSum = - nums[i] - nums[j]
                let vals = map.get(reqSum)
                if(map.has(reqSum) && vals && vals.length > 0){
                    vals = vals.filter((val) => val > j)

                    if(vals && vals.length > 0){
                        for (const val of vals){
                            let data = [nums[i],nums[j],nums[val]].sort().join(',')
                            
                            finalArray.add(data)
                        }
                        
                    }
                }


            
            }


        }
        return Array.from(finalArray).map((x) => x.split(',').map(Number))
    }
}
