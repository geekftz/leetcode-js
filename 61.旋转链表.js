/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 反转链表 保存上个节点和当前节点
var reverseList = function (head) {
  let h = new ListNode();
  h.next = head;

  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// 闭合成环 再断开
// var rotateRight = function (head, k) {
//   if (k === 0 || head === null || head.next === null) {
//     return head;
//   }

//   let n = 1;
//   let cur = head;

//   while (cur.next !== null) {
//     cur = cur.next;
//     n++;
//   }

//   // 末尾节点移动add步到最终的首节点
//   let add = n - (k % n);

//   // 说明是倍数循环 不变
//   if (add === n) {
//     return head;
//   }

//   // cur为最后一个节点 连接首个节点
//   cur.next = head;

//   let end = cur;

//   // end移动到改变后的最后一个节点
//   while (add > 0) {
//     end = end.next;
//     add--;
//   }

//   let start = end.next;
//   end.next = null;

//   return start;
// };

// 快慢指针
var rotateRight = function (head, k) {
  if (k === 0 || head === null || head.next === null) {
    return head;
  }

  let n = 1;
  let cur = head;

  while (cur.next) {
    cur = cur.next;
    n++;
  }

  let realK = k % n;

  let slow = head;
  let fast = head;

  while (realK > 0) {
    fast = fast.next;
    realK--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // 重新连接链表
  let start = slow.next;
  slow.next = null;
  fast.next = head;

  return start;
};

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

var k = 2;

var res = rotateRight(head, k);
console.log("%c res ⧭", "color: #731d1d", res);

// @lc code=end
