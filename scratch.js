var rob = function(nums) {
  let even_sum = 0;
  let odd_sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even_sum = even_sum + nums[i];
    } else {
      odd_sum = odd_sum + nums[i];
    }
  }

  return Math.max(even_sum, odd_sum);
};
