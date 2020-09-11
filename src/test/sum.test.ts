import { sum } from "../functions/sum";

test("Sum 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
