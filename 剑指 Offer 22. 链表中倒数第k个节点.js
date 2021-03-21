/*
 * @Author: hackftz
 * @Date: 2021-03-15 00:07:10
 * @LastEditTime: 2021-03-20 11:28:15
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 22. 链表中倒数第k个节点.js
 */

// 剑指 Offer 22. 链表中倒数第k个节点
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。

// 例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let map = new Map();
  let i = 1;

  while (head) {
    map.set(i, head);
    i++;
    head = head.next;
  }

  return map.get(i - k);
};

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null,
          },
        },
      },
    },
  },
};

var res = getKthFromEnd(head, 2);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
