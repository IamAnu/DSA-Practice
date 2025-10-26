/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let curr = 0; curr<nums.length; curr++){
        if(map.has(target-nums[curr])){
           return [map.get(target-nums[curr]), curr];
            
        }else{
            map.set(nums[curr], curr);
        }
    }
    return [];
};