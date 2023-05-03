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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  // 保留第一个指针的引用
  let top = new ListNode();
  // 移动指针
  let t = top;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      t.next = l1;
      l1 = l1.next;
    } else {
      t.next = l2;
      l2 = l2.next;
    }

    t = t.next;
  }

  t.next = l1 === null ? l2 : l1;

  return top.next;
};

var l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};

var l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

var res = mergeTwoLists(l1, l2);
console.log("%c⧭", "color: #1d3f73", res);
