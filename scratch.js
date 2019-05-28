function findMin(nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (nums[mid] > nums[left]) {
      left = mid;
    } else {
      right = mid;
    }
  }
}

// [5, 1, 2, 3, 4]
