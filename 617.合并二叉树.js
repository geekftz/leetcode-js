/*
 * @Author: hackftz
 * @Date: 2021-03-14 23:08:14
 * @LastEditTime: 2021-03-14 23:54:07
 * @LastEditors: hackftz
 * @FilePath: /let-code/617.合并二叉树.js
 */
/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  if (!root1 || !root2) {
    return root1 || root2;
  }

  root1.val += root2.val;
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)

  return root1;
};
// @lc code=end

