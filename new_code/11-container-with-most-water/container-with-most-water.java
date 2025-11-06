class Solution {
    public int maxArea(int[] arr) {
        int n = arr.length;
        int si = 0,  ei=n-1;
        int ans = Integer.MIN_VALUE;
        int max = ans;
        int diff = 0;
        while(si<ei){
            diff = ei-si;
            max = arr[si] < arr[ei] ? arr[si++] * diff :  arr[ei--] * diff;
            if( max > ans ){
                ans = max;
            }
            
        }
        return ans;
    }
}