/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(arr) {
    let i=0, n = arr.length;
    let ans = Number.MIN_SAFE_INTEGER;
    let count =0;
    for(let i=0;i<n;i++){
        if(arr[i] != 1){
        count = 0;
    }
    else{
        count++;
    }
    ans = Math.max(ans, count);
    }

    return ans;
};