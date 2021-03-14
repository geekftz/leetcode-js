/*
 * @Author: hackftz
 * @Date: 2021-03-09 23:40:33
 * @LastEditTime: 2021-03-10 23:37:29
 * @LastEditors: hackftz
 * @Description:
 * @FilePath: /let-code/ez-mirrorTree.js
 */
// 剑指 Offer 27. 二叉树的镜像
// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。

// 例如输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 示例 1：

// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]

// 限制：

// 0 <= 节点个数 <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  if (!root) {
    return root;
  }

  let stamp = root.left;
  root.left = root.right;
  root.right = stamp;

  mirrorTree(root.left);
  mirrorTree(root.right);

  return root;
};
