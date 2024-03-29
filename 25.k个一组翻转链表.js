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

// const myReverse = (head, tail) => {
//   let prev = null;
//   let cur = head;

//   while (prev !== tail) {
//     const next = cur.next;
//     cur.next = prev;
//     prev = cur;
//     cur = next;
//   }

//   return [tail, head];
// };

const myReverse = (head, tail) => {
  let prev = tail.next;
  let cur = head;

  while (prev !== tail) {
    const next = cur.next;

    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return [tail, head];
};

function logList(root) {
  const res = [];
  while (root) {
    res.push(root.val);
    root = root.next;
  }

  console.log(res.toString());
}

var reverseKGroup = function (head, k) {
  const hair = new ListNode(0);
  hair.next = head;

  let prev = hair;

  while (head) {
    let tail = prev;

    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;

      if (!tail) {
        return hair.next;
      }
    }

    const next = tail.next;

    const [reverseHead, reverseTail] = myReverse(head, tail);

    console.log("#########");

    // 把子链表重新接回原链表
    prev.next = reverseHead;
    tail.next = next;
    prev = reverseTail;

    head = tail.next;
  }

  return hair.next;
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
logList(res);
console.log("%c⧭", "color: #0088cc", res);

// @lc code=end
