// 2. 两数相加
// 已解答
// 中等
// 相关标签
// 相关企业
// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例 1：

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：

// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：

// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

// 提示：

// 每个链表中的节点数在范围 [1, 100] 内
// 0 <= Node.val <= 9
// 题目数据保证列表表示的数字不含前导零

// =========================================================================

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
var addTwoNumbers = function (l1, l2) {
  var carryFlag = false;
  var head = new ListNode();
  var h = head;

  while (l1 || l2) {
    var l1Val = l1 ? l1.val : 0;
    var l2Val = l2 ? l2.val : 0;

    var sum = l1Val + l2Val + (carryFlag ? 1 : 0);

    // 如果使用过了则重置为false
    if (carryFlag) {
      carryFlag = false;
    }

    console.log("🚀 --> addTwoNumbers --> sum:", sum);

    if (sum > 9) {
      carryFlag = true;
      sum = sum % 10;
      var newListNode = new ListNode(sum);
      head.next = newListNode;
      head = head.next;
    } else {
      var newListNode = new ListNode(sum);
      head.next = newListNode;
      head = head.next;
    }

    // l1 = l1 ? l1.next : new ListNode(0);
    // l2 = l2 ? l2.next : new ListNode(0);
    if (l1) {
      l1 = l1.next;
    } else {
      l1 = new ListNode(0, null);
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    } else {
      l2 = new ListNode(0, null);
      l2 = l2.next;
    }
  }

  if (carryFlag) {
    head.next = new ListNode(1);
  }

  return h.next;
};

// var l1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };

// var l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

const generateListByArray = (array) => {
  var head = new ListNode();
  h = head;

  for (let i = 0; i < array.length; i++) {
    const val = array[i];
    const newListNode = new ListNode(val);

    head.next = newListNode;
    head = head.next;
  }

  return h.next;
};

const l1 = generateListByArray([9, 9, 9, 9, 9, 9, 9]);
// const l1 = generateListByArray([9, 9, 9, 9]);
// console.log("🚀 --> l1:", l1);
const l2 = generateListByArray([9, 9, 9, 9]);

const outputListNodeValue = (node) => {
  // start
  console.log("node start ==============");

  while (node) {
    console.log(node.val);
    node = node.next;
  }

  console.log("node end =================");
};

var res = addTwoNumbers(l1, l2);
// console.log("🚀 --> res:", res);

console.log(outputListNodeValue(res));
