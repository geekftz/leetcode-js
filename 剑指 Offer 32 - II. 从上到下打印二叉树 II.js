/*
 * @Author: hackftz
 * @Date: 2021-03-20 20:25:49
 * @LastEditTime: 2021-03-20 20:39:24
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 32 - II. 从上到下打印二叉树 II.js
 */

// 剑指 Offer 32 - II. 从上到下打印二叉树 II
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// 提示：

// 节点总数 <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [[root, 0]],
    res = [];

  while (queue.length) {
    let [node, level] = queue.shift();

    if (!res[level]) {
      res[level] = [];
    }

    res[level].push(node.val);

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return res;
};
