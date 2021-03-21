/*
 * @Author: hackftz
 * @Date: 2021-03-16 09:25:24
 * @LastEditTime: 2021-03-16 09:34:24
 * @LastEditors: hackftz
 * @FilePath: /let-code/226.翻转二叉树.js
 */
/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return null
  }

  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left

  return root
};
// @lc code=end

