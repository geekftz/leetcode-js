// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 示例 1：


// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1,2], n = 1
// 输出：[1]


// 提示：

// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz


// 进阶：你能尝试使用一趟扫描实现吗？


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null && n === 1) {
    return null
  }

  let start = head;
  let end = start;
  let beforeEnd = null

  let l = n

  // end指针平移n个位置
  while (l > 0) {
    beforeEnd = end
    end = end.next
    l--
  }

  if (end !== null) {
    while (end.next !== null) {
      start = start.next
      beforeEnd = end
      end = end.next
    }

    // 需要删除最后一个节点
    if (n === 1) {
      beforeEnd.next = null
      return head
    }

    start.next = start.next.next;

    return head
  } else {
    return head.next
  }
};

const input = {
  val: 1,
  // next: null
  next: {
    val: 2,
    // next: null
    next: {
      val: 3,
      next: null
    }
  }
}
const result = removeNthFromEnd(input, 2)
console.log('🚀 --> file: 19. 删除链表的倒数第 N 个结点.js:75 --> result:', result);
