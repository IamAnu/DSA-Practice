class Solution {
    public void moveZeroes(int[] arr) {
       int n = arr.length;
       int i=0, j=0;
       while(j< n){
        if(arr[j] == 0){
            j++;
        }
        else{
            swap(arr,i,j);
            i++;
            j++;
        }
       } 
    }

    public void swap(int arr[], int i, int j){
        int swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
    }
}

//  Solved my own.