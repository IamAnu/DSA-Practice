/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i], i);
    }
    for(let i=0;i<arr.length;i++){
        const rem_elem = target-arr[i]
        if(map.has(rem_elem) && map.get(rem_elem) !== i){
            return[i,map.get(rem_elem)];
        }
    }
    return [];
};

// Took help from Leetcode solution