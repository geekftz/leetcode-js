/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  console.log('🚀 ~ file: 104.二叉树的最大深度.js ~ line 21 ~ maxDepth ~ root', root);
  if (root === null || root === undefined) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var root = {
  val: 3,

  left: {
    val: 9,

    left: null,

    right: null,
  },

  right: {
    val: 20,

    left: {
      val: 15,
    },

    right: {
      val: 7,
    },
  },
};

var res = maxDepth(root);
console.log('🚀 ~ file: 104.二叉树的最大深度.js ~ line 53 ~ res', res);

// @lc code=end
