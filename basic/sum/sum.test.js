// Import Subject module
import { sum } from "./sum";

// Test case - 1
test('Correctly sums two numbers', () => {
    const num1 = 5;
    const num2 = 10;
    const sumResult = num1 + num2;

    expect(sum(num1, num2)).toBe(sumResult);
})