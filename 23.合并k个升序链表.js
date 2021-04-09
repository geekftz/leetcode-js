/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode();
  let h = head
  while (l1 && l2) {
    if (l1.val < l2.val) {
      head.next = l1
      l1 = l1.next
    } else {
      head.next = l2
      l2 = l2.next
    }

    head = head.next
  }

  if (l1) {
    head.next = l1
  }

  if (l2) {
    head.next = l2
  }

  return h.next
};

var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }
  return lists.reduce(function(prev, cur) {
    return mergeTwoLists(prev, cur)
  })
};


var l1 = {
  val: 1,
  next: {
    val: 3,
    next: null
  }
}

var l2 = {
  val: 2,
  next: {
    val: 4,
    next: null
  }
}

// var res = mergeTwoLists(l1, l2)

// var lists = [l1, l2]
var lists = []
var res = mergeKLists(lists)
console.log('%c⧭', 'color: #00bf00', res);

// @lc code=end
