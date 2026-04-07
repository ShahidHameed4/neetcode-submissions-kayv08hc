class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0
        let high = nums.length - 1

        while(nums[low] > nums[high]){
            let mid = Math.floor((high + low)/2)
            if(high - low == 1) return nums[high]
            if(nums[mid] > nums[low] ) {
                low = mid
            }else{
                high = mid
            } 
        }


        return nums[low]
    }
}
