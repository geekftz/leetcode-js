/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function (root, low, high) {
//   if (root === null) {
//     return 0;
//   }

//   let res = 0;

//   let nodes = [root];

//   while (nodes.length) {
//     let node = nodes.shift();

//     if (node.val >= low && node.val <= high) {
//       res += node.val;
//     }

//     if (node.left) {
//       nodes.push(node.left);
//     }

//     if (node.right) {
//       nodes.push(node.right);
//     }
//   }
//   console.log(res);

//   return res;
// };

var rangeSumBST = function (root, low, high) {
  var res = 0

  if (!root) {
    return res
  }

  function dfs(root, low, high) {
    console.log('%c⧭', 'color: #7f2200', root);
    if (root !== null) {
      if (root.val >= low && root.val <= high) {
        res+=root.val
      }
      if (root.val > low) {
        dfs(root.left, low, high)
      }

      if (root.val < high) {
        dfs(root.right, low, high)
      }
    }

  }

  dfs(root, low, high)

  console.log('%c%s', 'color: #00ff88', res);
  return res
}

var root = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    val: 7,
    left: null,
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

var res = rangeSumBST(root, 1, 7);
console.log('%c%s', 'color: #7f7700', res);

// @lc code=end
