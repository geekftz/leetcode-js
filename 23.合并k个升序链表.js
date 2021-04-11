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

// var mergeTwoLists = function (l1, l2) {
//   let head = new ListNode();
//   let h = head;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       head.next = l1;
//       l1 = l1.next;
//     } else {
//       head.next = l2;
//       l2 = l2.next;
//     }

//     head = head.next;
//   }

//   if (l1) {
//     head.next = l1;
//   }

//   if (l2) {
//     head.next = l2;
//   }

//   return h.next;
// };

// 两两合并
// var mergeKLists = function (lists) {
//   if (lists.length === 0) {
//     return null;
//   }
//   return lists.reduce(function(prev, cur) {
//     return mergeTwoLists(prev, cur)
//   })
// };

// 连接所有链表元素 => 排序 => 倒序连接
// var mergeKLists = function (lists) {
//   return lists
//     .reduce((p, n) => {
//       while (n) {
//         p.push(n);
//         n = n.next;
//       }
//       return p;
//     }, [])
//     .sort((a, b) => a.val - b.val)
//     .reduceRight((p, n) => ((n.next = p), (p = n), p), null);
// };

// 递归 回溯
function mergeTwoLists(l1, l2) {
  // 如果有一个链表为空 则直接接另一个链表
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  // 比较值
  if (l1.val < l2.val) {
    // 指定next
    l1.next = mergeTwoLists(l1.next, l2);

    // 返回值小的链表元素
    return l1;
  } else {
    // 指定next
    l2.next = mergeTwoLists(l2.next, l1);

    // 返回值小的链表元素
    return l2;
  }
}

function mergeKLists(lists) {
  return merge(lists, 0, lists.length - 1);
}

function merge(lists, left, right) {
  if (left === right) {
    return lists[left];
  }

  let mid = (left + right) >> 1;
  return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
}

var l1 = {
  val: 1,
  next: {
    val: 3,
    next: null,
  },
};

var l2 = {
  val: 2,
  next: {
    val: 4,
    next: null,
  },
};

var l3 = {
  val: 5,
  next: {
    val: 7,
    next: null,
  },
};

// var res = mergeTwoLists(l1, l2);
// console.log("%c mergeTwoLists ⧭", "color: #00a3cc", res);

var lists = [l1, l2, l3];
// var lists = [];
var res = mergeKLists(lists);
console.log("%c⧭", "color: #00bf00", res);

// @lc code=end
