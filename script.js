'use strict'
function expandArray(nums_arr, n) {
    while (nums_arr.length < n) {
      const sum = nums_arr.slice(-3).reduce((a, b) => a + b, 0);
      nums_arr.push(sum);
    }
    return nums_arr;
  }
  
  let nums_arr = [1, 2, 3];
  let n = 9;
  let expanded_arr = expandArray(nums_arr, n);
  
  console.log(expanded_arr)

