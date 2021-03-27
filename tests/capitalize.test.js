const capitalize = require('../code/capitalize');

test('capitalize string', () => {
    expect(capitalize('daniel')).toBe('Daniel');
});