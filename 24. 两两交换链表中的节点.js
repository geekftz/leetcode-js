// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。



// 示例 1：


// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]
// 示例 2：

// 输入：head = []
// 输出：[]
// 示例 3：

// 输入：head = [1]
// 输出：[1]

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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
var swapPairs = function (head) {
  if (head === null) {
    return null
  }

  if (head.next === null) {
    return head
  }

  let h = new ListNode(0, head)
  let anchor = h;

  let left = h.next;
  let right = left.next;

  while (anchor.next !== null) {
    // 记录
    let l = left;
    let r = right
    // console.log('🚀 --> file: 24. 两两交换链表中的节点.js:54 --> swapPairs --> right:', right);


    // 判断为奇数的情况
    if (right === null) {
      break
    }

    if (left.next.next === null && right.next === null) {
      left = left.next.next;

    } else {
      left = left.next.next;
      right = right.next.next
    }


    anchor.next = r
    r.next = l
    l.next = left
    anchor = l
  }

  return h.next
};

// const input = null

// const input = {
//   val: 1,
//   next: null
// }

const input = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
      // next: {
      //   val: 4,
      //   next: null
      // }
    }
  }
}
const result = swapPairs(input)
console.log('🚀 --> file: 24. 两两交换链表中的节点.js:90 --> result:', result);
