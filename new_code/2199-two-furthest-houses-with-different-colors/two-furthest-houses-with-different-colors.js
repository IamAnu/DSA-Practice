/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let ans  =0 ;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(colors[i] !== colors[j]){
                ans = Math.max(ans, (j-i));
            }
        }
    }
    return ans;
};