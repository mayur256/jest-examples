// Import subject components
import { throwsError } from "./exception";

test('Test whether component throws an expected error', () => {
    expect(() => throwsError()).toThrow(); // throws an error / exception
    expect(() => throwsError()).toThrow(Error); // throws an instance of  (Error)
});