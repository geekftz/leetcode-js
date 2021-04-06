/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
      //   next: {
      //     val: 4,
      //     next: {
      //       val: 5,
      //       next: {
      //         val: 6,
      //         next: null,
      //       },
      //     },
      //   },
    },
  },
};

var res = reverseList(head);
console.log("%c⧭", "color: #ff0000", res);

// @lc code=end
