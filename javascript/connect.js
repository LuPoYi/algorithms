/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let nums = []

  const findNode = (node, parentNode) => {
    if (!node) return []
    if (parentNode?.right && parentNode.right !== node) {
      node.next = parentNode.right
    } else if (parentNode?.next?.left) {
      node.next = parentNode.next.left
    }

    nums.push(node)

    if (node.left) findNode(node.left, node)
    if (node.right) findNode(node.right, node)
    return nums
  }

  findNode(root, null)
  return root
}

var connect2 = function (root) {
  if (!root || !root.left) return root
  root.left.next = root.right
  if (root.next) root.right.next = root.next.left

  connect(root.left)
  connect(root.right)
  return root
}

// Non-recursion, queue BTS
var connect3 = function (root) {
  let queue = []
  if (root) queue.push(root)
  while (queue.length > 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      if (i < len - 1) node.next = queue[0]
    }
  }
  return root
}

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
  this.next = next === undefined ? null : next
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log('answer', connect(root))
