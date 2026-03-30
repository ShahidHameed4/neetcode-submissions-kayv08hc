class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prdArray = new Array(nums.length).fill(1)
        let left = 1;
        let right = 1;
        for(let i=0; i< nums.length; i++){
            //left multiply
            prdArray[i] *= left
            left *= nums[i]

            prdArray[nums.length - 1 - i] *= right
            right *= nums[nums.length - 1  - i]
        }
        //console.log(prdArray)

        return prdArray
    }
}
