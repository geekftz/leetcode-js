/*
 * @Author: hackftz
 * @Date: 2021-03-20 00:51:27
 * @LastEditTime: 2021-03-20 00:53:31
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 06. 从尾到头打印链表.js
 */

// 剑指 Offer 06. 从尾到头打印链表
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  var res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }

  return res.reverse();
};

var head = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 2,
    },
  },
};

var res = reversePrint(head);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
