/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// var levelOrder = function (root) {
//   const res = [];
//   if (!root) {
//     return res;
//   }

//   const queue = [root];

//   while (queue.length !== 0) {
//     const len = queue.length;
//     const arr = [];

//     while (len--) {
//       const node = queue.shift();
//       arr.push(node.val);
//       if (node.left) {
//         queue.push(node.left);
//       }
//       if (node.right) {
//         queue.push(node.right);
//       }
//     }

//     res.push(arr);
//   }

//   return res;
// };

var levelOrder = function (root) {
  // 存储节点值的数组
  const ret = [];
  if (!root) {
    return ret;
  }

  // 需要进行bfs的队列
  const list = [root];

  while (list.length) {
    let len = list.length;
    const arr = [];

    while (len--) {
      const node = list.shift();
      arr.push(node.val);

      if (node.left) {
        list.push(node.left);
      }

      if (node.right) {
        list.push(node.right);
      }
    }

    ret.push(arr);
  }

  return ret;
};

var root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

var res = levelOrder(root);
console.log('%c⧭', 'color: #bfffc8', res);
// @lc code=end
