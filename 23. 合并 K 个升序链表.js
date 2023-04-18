const lists = [
  {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
      },
    },
  },
  {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
      },
    },
  },
];

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

function logList(root) {
  const res = [];
  while (root) {
    res.push(root.val);
    root = root.next;
  }

  console.log(res.toString());
}

let head = null;

var mergeKLists = function (lists) {
  // 每轮最小
  let min = null;
  let minIndex = null;

  for (let i = 0; i < lists.length; i++) {
    const list = lists[i];

    logList(list);

    if (!list) {
      return;
    }

    if (min === null) {
      min = list.val;
      minIndex = i;
    } else {
      if (list.val < min) {
        min = list.val;
        minIndex = i;
      }
    }
  }

  console.log("🚀 --> mergeKLists --> min:", min);
  console.log("🚀 --> mergeKLists --> minIndex:", minIndex);

  if (!head) {
    head = lists[minIndex];
  } else {
    head.next = lists[minIndex];
  }

  lists[minIndex] = lists[minIndex].next;

  // mergeKLists(lists);

  console.log("🚀 --> mergeKLists --> lists:", lists);
  return head;
};

const res = mergeKLists(lists);
console.log("🚀 --> res:", res);
