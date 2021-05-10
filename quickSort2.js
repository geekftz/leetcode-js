
// const swap = (nums, l, r) => {
//   const temp = nums[r]
//   nums[r] = nums[l]
//   nums[l] = temp
// }

// 插入排序
// const sortArray = nums => {
//   for (let i = 1; i < nums.length; i++) {
//     let j = i
//     // 每次遍历 让最小的值和前面的值进行交换
//     while (j > 0 && nums[j] < nums[j - 1]) {
//       swap(nums, j, j - 1)
//       j--
//     }
//   }
//   return nums
// }

/**
 * quick sort
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function(nums) {
//   if (nums.length < 2) return nums;
//   return  quickSort(nums, 0, nums.length - 1);
// };

// function quickSort(nums, left, right) {
//   if (left >= right) return;
//   let pivotIndex = partition(nums, left, right)
//   quickSort(nums, left, pivotIndex - 1)
//   quickSort(nums, pivotIndex + 1, right)
//   return nums;
// }

function partition (nums, left, right) {
  let pivot = right;
  let leftIndex = left;

  for (let i = left; i < right; i++) {
    debugger
    if (nums[i] < nums[pivot]) {
        [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
        leftIndex++;
    }
  }

  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  console.log('%c nums ⧭', 'color: #f27999', nums);

  return leftIndex;
}

var nums = [4, 5, 1, 2]

var resIndex = partition(nums, 0, nums.length - 1)
console.log('%c resIndex %s', 'color: #40fff2', resIndex);

// var res = sortArray(nums)