/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(s) {
    let n = s.length;
    for(let i=n-1;i>=0;i--){
        if(parseInt(s[i])%2 === 1){
            return s.slice(0, i+1);
        }
    }
    return "";
};

// For understanding this question just go throgh this solution dry run 
// https://leetcode.com/problems/largest-odd-number-in-string/solutions/6097961/video-give-me-1-minute-by-niits-138w/