/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = (root, p, q) => {
  if (!root || !root.val || root.val == p.val || root.val == q.val) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root

  return left ? left : right
}

const lowestCommonAncestor2 = (root, p, q) => {
  while (true) {
    if (root.val >= p.val && root.val <= q.val) {
      return root
    } else if (root.val > p.val && root.val > q.val) {
      root = root.left
    } else {
      root = root.right
    }
  }
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

let root = new TreeNode(6)
root.left = new TreeNode(2)
root.right = new TreeNode(8)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(4)
root.right.left = new TreeNode(7)
root.right.right = new TreeNode(9)
root.left.right.left = new TreeNode(3)
root.left.right.right = new TreeNode(5)

const p = new TreeNode(2)
const q = new TreeNode(8)

console.log('answer: ', lowestCommonAncestor(root, p, q)?.val)
console.log('answer: ', lowestCommonAncestor2(root, p, q)?.val)
// test
// root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]
// p = 2, q = 4
// answer => 6
