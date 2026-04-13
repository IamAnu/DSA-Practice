class Solution {
    public int[] twoSum(int[] arr, int target) {

        Map<Integer, Integer> map = new HashMap<>();
        for(int i=0;i<arr.length;i++){
            int diff = target-arr[i];
            if(map.containsKey(diff)){
                return new int[]{map.get(diff), i};
            }
            else
            map.put(arr[i], i);
        }
        return new int[]{};
       


    }
}
// done it by own, previous solution I was using 2 loop but later I saw that one loop is enough fot the solution.