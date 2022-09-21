const groceryArray = [
    'milk',
    'olive oil',
    'nuts',
    'eggs',
    'bread'
];

test('Tests where an array have expected length and contains an expected item', () => {
    const groceryLength = groceryArray.length;

    // Assertions
    expect(groceryArray).toHaveLength(groceryLength);
    expect(groceryArray).toContain('eggs');
});
