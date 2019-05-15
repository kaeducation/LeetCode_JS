const eraseOverlapIntervals = intervals => {
  if (intervals.length === 0) return 0;

  let count = 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    const intervalStart = interval[0];
    const intervalEnd = interval[1];

    if (intervalStart < end) {
      count++;
      end = Math.min(intervalEnd, end);
    } else {
      end = intervalEnd;
    }
  }

  return count;
};

module.exports = eraseOverlapIntervals;
