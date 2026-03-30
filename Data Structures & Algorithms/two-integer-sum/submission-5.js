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

        // for (let i = 0; i< nums.length; i++){
        //     for (let j = i + 1; j< nums.length; j++){
        //         if(nums[i]+nums[j] == target){
        //             return [i,j]
                    
        //         }
            

            
        // }
            
        // }

        let map = new Map();
        let indMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let k1 = nums[i];
            let k2 = target - nums[i];

                if (!map.has(k1)) {
                    map.set(k1, []);
                }
                map.get(k1).push(i);

                if (!indMap.has(k2)) {
                    indMap.set(k2, []);
                }
                indMap.get(k2).push(i);
            
        }

        let subArray = []
        
        for (let key of indMap.keys()) {
            if (!map.has(key)) continue; // skip keys missing in map

            let values1 = map.get(key)
            let values2 =  indMap.get(key)

            if(values1)
            for (const val1 of values1){
                for (const val2 of values2){
                    if(val1 != val2){
                        subArray.push([val1,val2])
                    }

                
                }
            }
            

            // if(map.get(key)){

                
            //     subArray.push([map.get(key)[0],indMap.get(key)[0]])
            // }
            
        }



        
        
        console.log(subArray)
        return subArray.length > 0 ? subArray[0] : []
        // for (let i = 0; i< nums.length; i++){
        //     for (let j = i + 1; j< nums.length; j++){
        //         if(nums[i]+nums[j] == target){
        //             return [i,j]
                    
        //         }
            

            
        // }
            
        // }
    



    }
}
