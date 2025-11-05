/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length ;
    let curr = 0;
    for(let i=0;i<n;i++){
        if(nums[i] !== val) {
            nums[curr++] = nums[i];
        }
    }
    return curr;
};

// checked solution for undestanding.