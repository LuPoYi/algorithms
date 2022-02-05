/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let nums = []

  const inorder = (root) => {
    if (!root) return []

    if (root.left) inorder(root.left)
    nums.push(root.val)
    if (root.right) inorder(root.right)
    return nums
  }

  return inorder(root)
}

//    4
//   / \
//  2   6
// / \ / \
//1  3 5  7

// preorder: 中->左->右，4213657
// inorder: 左->中->右，1234567 (對binary search tree做inorder traversal就是依序拿取)
// postorder: 左->右->中，1325764

// Your input
// [1,null,2,3]
// Output
// [1,3,2]
// Expected
// [1,3,2]

// const preorder = (root) => {
//   if (!root) return []

//   nums.push(root.val)
//   if (root.left) preorder(root.left)
//   if (root.right) preorder(root.right)
//   return nums
// }

// console.log("aaa",  preorder(root))
