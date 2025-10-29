/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        let rem = target-arr[i];
     if( map.has(rem)) {
        return [map.get(rem), i]
     }  map.set(arr[i], i)
    }
    return [];
};


//  one pass method