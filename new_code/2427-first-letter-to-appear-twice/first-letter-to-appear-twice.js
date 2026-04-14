/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    map = new Map();
    for(let i=0;i<s.length;i++){
        if(map.has(s.charAt(i))){
            return s.charAt(i);
        }
        else{
            map.set(s.charAt(i));
        }
    }
};