/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = ""
    let depth = 0;
    for(ch of s){
        if(ch === '('){
            if(depth > 0){
                ans += ch;
            }
            depth++;
        } 
        else {
            depth--;
            if(depth > 0){
                ans += ch
            }
        }
        
    }
    return ans ;
};

// I didn't get this question exactly trying to apply logic base on below tutorial but someHow I was failing in logic building for nested parentheses. so took GPT Help

// ref :- https://www.youtube.com/watch?v=MLfAFCkzChU