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
