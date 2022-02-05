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
 * @param {number} k
 * @return {number}
 */

// 此題要找出在二元搜尋樹中的第 K 個元素為何。

var kthSmallest = function (root, k) {
  let ary = []
  const inOrder = (root) => {
    if (root) {
      inOrder(root.left)
      ary.push(root.val)
      inOrder(root.right)
    }
  }
  inOrder(root)
  return ary[k - 1]
}

// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3
