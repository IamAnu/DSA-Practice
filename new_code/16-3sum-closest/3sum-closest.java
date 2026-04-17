class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int n = nums.length;
        int gap = Integer.MAX_VALUE;
        int ans =0;
        Arrays.sort(nums);
        for(int i=0;i<n-2;i++){

            int si = i+1, ei = n-1;
            while(si<ei){
                int sum = nums[i] + nums[si] + nums[ei];
                if(sum == target){
                    return sum;
                }
                else if(sum > target){
                    int curr_gap = sum - target;
                    if( curr_gap < gap){
                        gap = curr_gap;
                        ans = sum;
                    }
                    ei--;
                }
                else{
                    int curr_gap = target-sum;
                    if(curr_gap < gap){
                        gap = curr_gap;
                        ans = sum;
                    }
                    si++;

                }
            }
        }
        return ans;
    }
}