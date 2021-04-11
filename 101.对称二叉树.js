/*
 * @Author: hackftz
 * @Date: 2021-03-21 10:23:45
 * @LastEditTime: 2021-03-21 11:16:18
 * @LastEditors: hackftz
 * @FilePath: /let-code/101.对称二叉树.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return compare(root, root);
};

var compare = function (left, right) {
  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  return (
    left.val === right.val &&
    compare(left.left, right.right) &&
    compare(left.right, right.left)
  );
};

var root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },

  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

var res = isSymmetric(root);
console.log("%c%s", "color: #7f2200", res);
// @lc code=end
