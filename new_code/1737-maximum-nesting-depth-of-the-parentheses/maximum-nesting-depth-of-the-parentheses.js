/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let curr = 0;
    let max = 0;
    for(let ch of s){
        if(ch === '(') curr++;
        max = Math.max(curr, max);
        if(ch === ')') curr--;
    }
    return max;
};


// Very easy problem 
// Just dry run his code  every thing will clear quikly.
// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969646/beats-100-java-easywith-explanation-simp-wjx2/