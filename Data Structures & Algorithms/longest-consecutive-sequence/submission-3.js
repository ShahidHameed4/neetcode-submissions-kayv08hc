class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {   

        let sortedNums = Array.from(new Set(nums.sort((a,b)=> a - b)))
        let seqStart = false, maxSeq = -Infinity, currentSeq = 0;
        console.log(sortedNums)
        if (sortedNums.length == 0) return 0
        for (let i=0; i < sortedNums.length - 1; i++){
            if(sortedNums[i] + 1 == sortedNums[i+1]){
                seqStart = true
                currentSeq +=1
                if(currentSeq > maxSeq) maxSeq = currentSeq
            }else{
                currentSeq = 0 
                seqStart = false
            }
            
            console.log(maxSeq, currentSeq, sortedNums[i], sortedNums[i+1], i)
        }

        return maxSeq > 0 ? maxSeq + 1 : 1

    }
}
