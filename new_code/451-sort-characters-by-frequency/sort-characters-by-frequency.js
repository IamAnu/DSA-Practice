/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let freq = {};
    for(let chrs of s){
        freq[chrs] = (freq[chrs] || 0 ) + 1;
    }
    let arr = Object.entries(freq);
    arr.sort((a,b) => b[1] - a[1] );

    let ans = ""
    for(let [char, count ] of arr ){
        ans += char.repeat(count);
    }

    return ans;
};