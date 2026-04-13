/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    map = new Map ();
    for(let i=0;i<arr.length;i++){
        let diff = target-arr[i];
        if(map.has(diff)){
            return [map.get(diff), i];
        }
        else{
            map.set(arr[i], i);
        }
    }
};