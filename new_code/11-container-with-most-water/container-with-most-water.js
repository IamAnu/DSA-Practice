/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let n = height.length;
    let si = 0, ei = n-1;
    let ans = 0;
    // let max = ans;
    let diff = 0;
    while( si < ei){
        diff = ei-si;
        let min_val = Math.min(height[si] , height[ei]);
        ans = Math.max(ans, min_val * diff);
        height[si] < height[ei] ?  si ++ : ei-- ;
        // max = height[si] <  height[ei] ? diff * height[si++] : diff * height[ei--] ;
        // if(ans < max){
        //     max=ans;
        // }
        

    }
    return ans;

};

// initially was difficult to understand but after this :- https://www.youtube.com/watch?v=ZHQg07n_tbg