class Solution {

    binarySearch(nums){
        let low = 0
        let high = nums.length - 1
        let lowest = 99999

        while(nums[low] > nums[high]){
            let mid = Math.floor((high - low)/2)
            
            if(nums[mid] > nums[low] ) {
                low = mid
            }else{
                high = mid
            }



        }


        return nums[low]

    }
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let low = 0
        let high = nums.length - 1
        let lowest = 99999

        while(nums[low] > nums[high]){
            let mid = Math.floor((high + low)/2)
            console.log(nums[low],mid, nums[mid] ,nums[high])

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
