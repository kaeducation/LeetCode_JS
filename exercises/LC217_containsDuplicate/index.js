const containsDuplicate = nums => {
  const visitedNums = {}; // {7: true}

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
};

module.exports = containsDuplicate;
