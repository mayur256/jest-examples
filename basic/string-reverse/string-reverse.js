/**
 * Implement a function that reverses a string without using the built-in function
 * reverse or toReversed
 */

export function reverseString(original) {
    let reversed = "";
    for (let i = original.length - 1; i >= 0; i--) {
        reversed += original[i];
    }

    return reversed;
}

const originalString = "JohnDoe";

const reversedString = reverseString(originalString);

// console.log({ originalString, reversedString });

