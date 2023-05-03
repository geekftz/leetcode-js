// 2095. 删除链表的中间节点

// 给你一个链表的头节点 head 。删除 链表的 中间节点 ，并返回修改后的链表的头节点 head 。

// 长度为 n 链表的中间节点是从头数起第 ⌊n / 2⌋ 个节点（下标从 0 开始），其中 ⌊x⌋ 表示小于或等于 x 的最大整数。

// 对于 n = 1、2、3、4 和 5 的情况，中间节点的下标分别是 0、1、1、2 和 2

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
var deleteMiddle = function (head) {
  if (!head) {
    return head;
  }

  if (head && !head.next) {
    return null;
  }

  if (head && head.next && !head.next.next) {
    head.next = head.next.next;
    return head;
  }

  const top = head;

  let start = head;
  let end = head.next;
  let prev = null;

  while (end.next && end.next.next) {
    start = start.next;
    end = end.next.next;
    prev = start;
  }

  // 判断是奇数还是偶数

  // 奇数
  if (end.next) {
    start.next = start.next.next;
  } else {
    prev.next = prev.next.next;
  }

  return top;
};

const params = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 7,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 6,
              next: null,
            },
          },
        },
      },
    },
  },
};

const res = deleteMiddle(params);

console.log("🚀 --> res:", res);

function logList(root) {
  const res = [];
  while (root) {
    res.push(root.val);
    root = root.next;
  }

  console.log(res.toString());
}

logList(res);
