import { reverseString } from "./string-reverse"

test('Reverses a string', () => {
    const originalString = "Alice";
    const referenceResult = originalString.split('').reverse().join('');
    
    const reversedString = reverseString(originalString);
    
    expect(reversedString).toBe(referenceResult);
});
