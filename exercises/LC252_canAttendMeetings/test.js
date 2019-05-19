const canAttendMeetings = require("./index");

test("returns true for working schedule.", () => {
  expect(canAttendMeetings([[7, 10], [2, 4]])).toEqual(true);
});

test("returns true for empty schedule.", () => {
  expect(canAttendMeetings([])).toEqual(true);
});

test("returns false for invalid schedule.", () => {
  expect(canAttendMeetings([[0, 30], [5, 10], [15, 20]])).toEqual(false);
});
