import { sum } from "../sum/sum";

test('comparison of sum of two numbers', () => {
    const value = sum(3, 1);
    
    // Assertions
    expect(value).toBeGreaterThan(3); // >
    expect(value).not.toBeGreaterThanOrEqual(4.5); // >=
    expect(value).toBeLessThan(5); // <
    expect(value).toBe(4); // =

    expect(value).toBeCloseTo(4.0);
});

