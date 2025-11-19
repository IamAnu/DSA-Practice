/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charArray = new Array(26).fill(0);
    if(s.length  !== t.length ) return false;
    for(let i=0;i<s.length;i++){
        charArray[s.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]++;
        charArray[t.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }
    for(let k=0;k<charArray.length;k++){
        if(charArray[k] !== 0) return false;
    }
    return true;
};


//  For hint just dry run previous solution got clear in first iteration.
// For javascript I have ask help from gpt.