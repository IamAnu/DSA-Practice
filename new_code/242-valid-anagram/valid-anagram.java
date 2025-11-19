class Solution {
    public boolean isAnagram(String s, String t) {
        int charArray[] = new int[26]; 
        int n = charArray.length;

        for(int i=0;i<s.length();i++){
            charArray[s.charAt(i) - 'a']++;
        }
         for(int j=0;j<t.length();j++){
            charArray[t.charAt(j) - 'a']--;
        }

        for(int k=0;k<n;k++){
            if(charArray[k] != 0) return false;
        }

        return true;

    }
}

