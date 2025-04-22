// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5

// 提示：

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;

  let target = Math.floor((nums1.length + nums2.length) / 2);
  console.log("🚀 --> findMedianSortedArrays --> target:", target);

  while (i + j < target) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  console.log(i, j);
};

// var findMedianSortedArrays = function (nums1, nums2) {
//   let m = nums1.length;
//   let n = nums2.length;
//   let left = Math.floor((m + n + 1) / 2);
//   let right = Math.floor((m + n + 2) / 2);
//   return (getKth(nums1, nums2, left) + getKth(nums1, nums2, right)) / 2;
// };

// function getKth(nums1, nums2, k) {
//   let m = nums1.length;
//   let n = nums2.length;
//   if (m > n) {
//     return getKth(nums2, nums1, k);
//   }
//   if (m === 0) {
//     return nums2[k - 1];
//   }
//   if (k === 1) {
//     return Math.min(nums1[0], nums2[0]);
//   }

//   let i = Math.min(m, Math.floor(k / 2));
//   let j = Math.min(n, k - i);

//   if (nums1[i - 1] < nums2[j - 1]) {
//     return getKth(nums1.slice(i), nums2, k - i);
//   } else {
//     return getKth(nums1, nums2.slice(j), k - j);
//   }
// }

const result = findMedianSortedArrays([1, 3], [2]);
console.log(result); // 2.00000
// 2.5
