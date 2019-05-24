function canJump(nums) {
  let dpPositions = new Array(nums.length).fill(false);
  dpPositions[0] = true;

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (dpPositions[i] && i + nums[i] >= j) {
        dpPositions[j] = true;
        break;
      }
    }
  }

  return dpPositions.pop();
}
