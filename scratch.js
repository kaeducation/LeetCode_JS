var containsDuplicate = function(nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashMap[num]) {
      return true;
    } else {
      hashMap[num] = true;
    }
  }

  return false;
};
