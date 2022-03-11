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
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 }
 var addTwoNumbers = function(l1, l2) {
    const head = new ListNode(0);
    var point = head;
    var carry = 0;
    var run = (l1,l2,point)=>{
        if(l1 === null && l2 === null){
            if(carry == 1){
                point.next = new ListNode(1);
            }
            return head.next;
        }
        var sum = (l1 ? l1.val :0) + (l2 ? l2.val : 0) + carry;
        if(sum>9){
            point.next = new ListNode(sum%10);
            carry = 1;
        }else{
            point.next = new ListNode(sum);
            carry = 0;
        }
        return run(l1 ? l1.next : null, l2? l2.next: null, point.next);
    }
    return run(l1,l2,point);
};

addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9])