/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(arr) {
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])) return true;
        else map.set(arr[i]);
    }
    return false;
};