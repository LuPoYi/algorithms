/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return traveler(nums, 0, nums.length)
}

var traveler = function (temp, start, end) {
  if (start >= end) return null
  else {
    var mid = Math.floor((start + end) / 2)
    var result = new TreeNode(temp[mid])
    result.left = traveler(temp, start, mid)
    result.right = traveler(temp, mid + 1, end)
    return result
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

console.log('answer', sortedArrayToBST([-10, -3, 0, 5, 9])) // [0,-3,9,-10,null,5]
