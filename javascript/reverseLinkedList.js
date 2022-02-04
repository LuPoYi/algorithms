function ListNode(val) {
  this.val = val
  this.next = null
}
function abc() {
  //12312321
}

// ListNode {
//   val: 1,
//     next: ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } }
// }
// 1 -> 2 -> 3 -> 4 -> 5 -> null

// Iterative
// var reverseList = function (head) {
//   let prev = null
//   let curr = head
//   let next = null
//   while (curr != null) {
//     next = curr.next // save next(node2->node3...) for later
//     curr.next = prev // node1's prev = null
//     prev = curr // prev = node1
//     curr = next // curr = node2
//   }
//   return prev
// }
// var count2 = 0
// // Recursive
// function reverseList(node) {
//   count2++
//   let count = count2
//   console.log(count, "node", node)
//   if (!node || !node.next) {
//     //console.log(count, "return1", node) // ListNode { val: 3, next: null }
//     return node;
//   }

//   let head = reverseList(node.next);
//   console.log(count, "1", "head", head)
//   console.log(count, "2", "node", node)

//   node.next.next = node;
//   console.log(count, "3", "node", node)

//   node.next = null;
//   console.log(count, "4", "node", node)
//   // { val: 2, next: ListNode { val: 3, next: null } }
//   // => { val: 2, next: ListNode { val: 3, next: {} } }
//   console.log(count, "5", "return2", head)
//   return head;
// }

// 1->2->3-N
// step1 head = 123N
//// step2 head = 23N
////// step3 head = 3N
//////       return 3 -> N
//// step2 head.next.next = head => 2.next.next = 2 => 323232..
//// step2 head.next = null => 2.next = null, 32N

function reverseList(head) {
  //console.log("head", head.val)
  if (!head || !head.next) {
    console.log('A')
    return head // 3 -> n
  }
  let tmp = reverseList(head.next) // 3 -> n
  //console.log("1", head.val, "head", head)
  //console.log("1", head.val, "tmp", tmp)
  //console.log("1", head.val, "head.next.next", head.next.next)

  head.next.next = head // head(2) 2->3->n => 2->3->2
  head.next = undefined // 2->n
  //console.log("2", head.val, "head", head)
  //console.log("2", head.val, "tmp", tmp)
  //console.log("B")
  return tmp
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
// let node5 = new ListNode(5);

node1.next = node2
node2.next = node3
node3.next = node4
//node4.next = node5;
node3.next = null
//console.log("node1", node1)
//console.log("node3", node3)
console.log(reverseList(node1))
