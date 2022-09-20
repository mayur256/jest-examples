// Import subject module
import { givesNull } from "./truthiness";

describe('Test suite for Truthy / Falsy values in js', () => {
    // test case 1 - check a function returning null values
    test('Asserstions on a function returning null value', () => {
        const nullValue = givesNull();
        expect(givesNull()).toBe(null) // returns null value
        expect(nullValue).toBeNull(); // is null
        expect(nullValue).toBeDefined(); // is defined
        expect(nullValue).not.toBeUndefined(); // is not undefined
        expect(nullValue).toBeFalsy(); // can be converted to boolean false
        expect(nullValue).not.toBeTruthy(); // cannot be boolean true
    });
});