const sum = require("./sum");

test("adds 1 + 2 to equal 4", () => {
  expect(sum(1, 2)).toBe(4);
});
test("adds 1 + 5 to equal 7", () => {
  expect(sum(1, 5)).toBe(7);
});
