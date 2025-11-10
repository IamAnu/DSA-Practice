/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(arr) {
    let curr_sum = arr[0];
    let ans = arr[0];
    for(let i=1;i<arr.length;i++){
        if(curr_sum >= 0){
            curr_sum += arr[i];
        }
        else{
            curr_sum = arr[i];
        }
        ans = Math.max(ans, curr_sum);
    }
    return ans;
};

// https://www.youtube.com/watch?v=VMtyGnNcdPw #kadane's algorithm