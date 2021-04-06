/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let s = new Set();

  while (head) {
    console.log("%c⧭", "color: #e50000", s);
    if (s.has(head)) {
      return true;
    } else {
      s.add(head);
      head = head.next;
    }
  }

  return false;
};

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

head.next.next.next = head;

var res = hasCycle(head);
console.log("%c%s", "color: #00a3cc", res);

// @lc code=end
