/*
 * @Author: hackftz
 * @Date: 2021-02-24 01:07:29
 * @LastEditTime: 2021-03-10 23:52:55
 * @LastEditors: hackftz
 * @Description:
 * @FilePath: /let-code/ez-symmetricTree.js
 */
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root instanceof TreeNode) {
    return compare(root.left, root.right);
  } else {
    return true;
  }
};

function compare(p, q) {
  if (p instanceof TreeNode && q instanceof TreeNode) {
    if (p.val === q.val) {
      return compare(p.left, q.right) && compare(p.right, q.left);
    } else {
      return false;
    }
  } else {
    return p === q;
  }
}

var a = new TreeNode(1, 2, 3);

var res = isSymmetric(a);

console.log("🚀 ~ file: ez-symmetricTree.js ~ line 42 ~ res", res);
