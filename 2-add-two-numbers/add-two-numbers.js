/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    /*
    let sum = 0;
    let carry = 0;
    let dummy = new ListNode(0);
    let temp = dummy;
    
    while(l1 != null || l2 != null){
        
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2){
            sum += l2.val;
            l2 = l2.next;
        }
        
        if(sum >9){
            carry = 1;
            sum = sum-10;
            
        }
        
        // sum += carry;
        // console.log(sum +"\n");
        // carry = sum/10;
        // console.log("Carry = " +carry);
        
        temp.next= new ListNode(sum);
        // temp.next = nodeSum;
        temp = temp.next;
        
        sum = carry;
        carry = 0;
        
    }
    return dummy.next;
    
    */
     var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
    
    
    
};

/* 
   I can't write number/10 because javascript doesn't ignore .00 val;
*/