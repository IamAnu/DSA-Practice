/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    console.log(" String " , s);
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
};