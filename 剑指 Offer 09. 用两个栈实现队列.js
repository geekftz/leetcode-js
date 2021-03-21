/*
 * @Author: hackftz
 * @Date: 2021-03-20 13:44:33
 * @LastEditTime: 2021-03-20 13:44:45
 * @LastEditors: hackftz
 * @FilePath: /let-code/剑指 Offer 09. 用两个栈实现队列.js
 */

// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

var CQueue = function () {
  this.p = [];
  this.q = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.p.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.q.length) return this.q.pop();

  while (this.p.length) {
    this.q.push(this.p.pop());
  }

  return this.q.length ? this.q.pop() : -1;
};
