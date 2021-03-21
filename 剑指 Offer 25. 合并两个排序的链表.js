/*
 * @Author: hackftz
 * @Date: 2021-03-20 12:58:33
 * @LastEditTime: 2021-03-20 13:34:56
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 25. 合并两个排序的链表.js
 */

// 剑指 Offer 25. 合并两个排序的链表
// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 限制：

// 0 <= 链表长度 <= 1000

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let h = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1;
      l1 = l1.next;
    } else {
      head.next = l2;
      l2 = l2.next;
    }

    head = head.next;
  }
  if (l1) {
    head.next = l1;
  }

  if (l2) {
    head.next = l2;
  }

  return h.next;
};

var l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null,
    },
  },
};

var l2 = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 6,
      next: {
        val: 7,
        next: null,
      },
    },
  },
};

var res = mergeTwoLists(l1, l2);
console.log('%c [ res ]', 'font-size:13px; background:pink; color:#bf2c9f;', res);
