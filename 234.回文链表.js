/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

function logList(root) {
  const res = [];
  while (root) {
    res.push(root.val);
    root = root.next;
  }

  console.log(res.toString());
}

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
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//   let arr = [];
//   while (head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   console.log('%c⧭', 'color: #ff0000', arr);

//   let i = 0, j = arr.length - 1

//   while (i < j) {
//     if (arr[i] === arr[j]) {
//       i++;
//       j--;
//     } else {
//       return false
//     }
//   }

//   return true
// };

// var reverseHead = function (head) {
//   let prev = null;
//   let cur = head;

//   while (cur) {
//     const next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }

//   return prev;
// };
var reverseHead = function (head) {
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

// var getFirstHalf = function (head) {
//   let slow = head;
//   let fast = head;

//   while (fast.next !== null && fast.next.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// };

var getFirstHalf = function (head) {
  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  console.log("🚀 --> getFirstHalf --> slow:", slow);
  return slow;
};

var isPalindrome = function (head) {
  let firstHalfEnd = getFirstHalf(head);

  let head2 = reverseHead(firstHalfEnd.next);

  while (head2) {
    if (head2.val !== head.val) {
      return false;
    }

    head2 = head2.next;
    head = head.next;
  }

  return true;
};

// var isPalindrome = function (head) {
//   let left = head;

//   function traverse(right) {
//     if (right === null) {
//       return true;
//     }

//     let res = traverse(right.next);

//     let isSame = res && left.val === right.val;

//     left = left.next;

//     return isSame;
//   }

//   return traverse(head);
// };

// var head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 2,
//       next: {
//         val: 1,
//         next: null
//       }
//     }
//   }
// }

var head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        // next: {
        //   val: 1,
        //   next: null,
        // },
        next: null,
      },
    },
  },
};

var res = isPalindrome(head);

// var res = getFirstHalf(head)
console.log("%c⧭", "color: #00e600", res);
// @lc code=end
