/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

 var rotateRight = function(head, k) {
    let cur=head;
    let curNew=head;
    let len=0;
    if (!head) {
        return null;
    }
    while(cur.next){
        len++;
        cur=cur.next; 
    }
    len=len+1;
    cur.next=curNew;         //making cyclic linked list
    let target=len-k%(len);   //finding target to where we should traverse
    let index=0;

    while(index<target){
        cur=cur.next; 
        index++;
    }
    let newHead=cur.next;        //making new head of linked list
    cur.next=null;                     //making cyclic linked list to singly linked list
    return newHead
};

rotateRight(head = [1,2,3,4,5], k = 2)