// 144. 二叉树的前序遍历
var preorderTraversal = function (root) {
  if (!root) return [];
  var result = [];
  result.push(root.val);
  result = result.concat(preorderTraversal(root.left));
  result = result.concat(preorderTraversal(root.right));
  return result;
};
