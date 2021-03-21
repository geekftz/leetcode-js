/*
 * @Author: hackftz
 * @Date: 2021-03-20 10:38:01
 * @LastEditTime: 2021-03-20 11:35:16
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 24. 反转链表.js
 */

// 剑指 Offer 24. 反转链表
// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  function reverseLink(head) {
    if (head === null || head.next === null) {
      return head;
    }
    const p = reverseLink(head.next);
    head.next.next = head; // 指针反转
    head.next = null;

    return p; // 返回真正的表头
  }

  return reverseLink(head);
};

var head = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 2,
      next: null,
    },
  },
};

var res = reverseList(head);
// console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
