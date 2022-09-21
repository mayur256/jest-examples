test('String search and matching', () => {
    const str = "The fox and the sour grapes";

    expect(str).toMatch('fox') // matches a word fox in the string
    expect(str).toMatch(/s.*r/) // matches a substring that starts with s and ends with r e.g sour
    expect(str).not.toMatch(/\d/) // matches string with no numbers
})