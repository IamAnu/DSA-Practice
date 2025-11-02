class Solution {
    public int[] searchRange(int[] arr, int target) {

        int ans[] = new int[2];
        Arrays.fill(ans, -1); 
        int fst_idx = -1;
        int scd_idx = -1;

        if(arr.length <= 0){
            return ans;
        }
        for(int i=0;i<arr.length;i++){
            if(arr[i] == target && fst_idx == -1){
                fst_idx = i;
            }
            else if(arr[i] == target && fst_idx != -1){
               scd_idx = i; 
            }
        }
        if(scd_idx == -1){
            ans[0] = fst_idx;
            ans[1] = fst_idx;
        }
        else{
            ans[0] = fst_idx;
            ans[1] = scd_idx;
        }
       

        return ans;

    }
}