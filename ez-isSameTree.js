// 相同的树

/*
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p instanceof TreeNode && q instanceof TreeNode) {
    if (p.val === q.val) {
      return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
      return false;
    }
  } else {
    console.log(p, q);
    return p === q;
  }
};

var a = new TreeNode(1, 2, 1);
var b = new TreeNode(1, 1, 2);

var res = isSameTree(a, b);
console.log('🚀 ~ file: isSameTree.js ~ line 40 ~ res', res);
