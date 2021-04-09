/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
// var reverseKGroup = function (head, k) {
//   if (k === 1) {
//     return head;
//   }

//   let count = 0; // 计数器
//   let arr = [];
//   let brr = [];

//   while (head) {
//     if (count === 0) {
//       arr.push([head]);
//     }

//     count++;

//     if (count === k) {
//       let lastArr = arr[arr.length - 1];
//       lastArr.push(head);
//       count = 0;
//     }

//     head = head.next;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const a = arr[i];
//     if (a.length === 2) {
//       let reversePart = reverseList(a[0], a[1]);
//       brr.push(reversePart);
//     } else {
//       brr.push(a);
//     }
//   }

//   let j = 0;

//   while (j < brr.length - 1) {
//     brr[j][1].next = brr[j + 1][0];
//     j++;
//   }

//   return brr[0][0];
// };

var reverseList = function (head, tail) {
  let prev = tail.next;
  let cur = head;

  while (cur !== tail) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return [tail, head];
};

var reverseKGroup = function (head, k) {
  if (k === 1) {
    return head;
  }

  let h = new ListNode();
  h.next = head;

  let count = 0;
  let start = null;
  let end = null;

  while (head) {
    if (count === 0) {
      start = head;
    }

    count++;

    if (count === k) {
      end = head;
      count = 0;

      let [start1, end1] = reverseList(start, end);
      console.log("%c⧭", "color: #7f2200", start1, end1);
    }

    head = head.next;
  }
};

var head = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 2,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

var k = 2;

// var head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: null,
//         },
//       },
//     },
//   },
// };

// var k = 1;

var res = reverseKGroup(head, k);
console.log("%c⧭", "color: #0088cc", res);

// @lc code=end
