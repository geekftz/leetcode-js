/*
 * @Author: hackftz
 * @Date: 2021-03-20 01:14:03
 * @LastEditTime: 2021-03-20 10:30:03
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 54. 二叉搜索树的第k大节点.js
 */
// 剑指 Offer 54. 二叉搜索树的第k大节点
// 给定一棵二叉搜索树，请找出其中第k大的节点。

// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4

// 限制：

// 1 ≤ k ≤ 二叉搜索树元素个数

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthLargest = function (root, k) {
//   var res = [];
//   function loop(root) {
//     if (root && root.val) {
//       res.push(root.val);
//     }

//     if (root.left) {
//       loop(root.left);
//     }

//     if (root.right) {
//       loop(root.right);
//     }
//   }

//   loop(root);

//   res = res.sort((a, b) => b - a);

//   return res[k - 1];
// };

var kthLargest = function (root, k) {
  let setArray = [];
  const dfs = function (node) {
    console.log('%c [ node ]', 'font-size:13px; background:pink; color:#bf2c9f;', node);
    if (node === null) {
      return;
    }
    dfs(node.right);
    console.log('%c [ node.val ]', 'font-size:13px; background:pink; color:#bf2c9f;', node.val);
    setArray.push(node.val);
    dfs(node.left);
  };
  dfs(root);
  console.log('%c [ setArray ]', 'font-size:13px; background:pink; color:#bf2c9f;', setArray);
  return setArray[k - 1];
};

var root = {
  val: 5,
  left: {
    val: 3,
    left: {
      left: {
        left: null,
        right: null,
        val: 1,
      },
      right: null,
      val: 2,
    },
    right: {
      left: null,
      right: null,
      val: 4,
    },
  },
  right: {
    left: null,
    right: null,
    val: 6,
  },
};

var res = kthLargest(root, 1);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
