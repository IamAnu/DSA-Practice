class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
       Set<List<Integer>> ans = new HashSet<>();
       Arrays.sort(nums);
        int n = nums.length;
        if(n<3) return new ArrayList<>();
        for(int i=0;i<n-2;i++){
            int ei = n-1;
            int si = i+1;
            while(si<ei){
                int sum = nums[i]+nums[si]+nums[ei];
                if(sum==0){
                    ans.add(Arrays.asList(nums[i], nums[si++], nums[ei--]));
                }
                else if(sum > 0) ei--;
                else si++;
            }
        }
        return new ArrayList<>(ans);
    }
}
