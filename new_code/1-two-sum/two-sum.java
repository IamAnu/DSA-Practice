class Solution {
    public int[] twoSum(int[] arr, int target) {

        Map<Integer, Integer> map = new HashMap<>();
        int i2 = 0;
        for(int i=0;i<arr.length;i++){
            map.put(arr[i], i);
        }
        for(int i=0;i<arr.length;i++){
            int diff = target-arr[i];
            if(map.containsKey(diff) && map.get(diff)!=i){
                return new int[]{i, map.get(diff)};
            }
        }
        return new int[]{};
       


    }
}
// done it by own 