const caesarCipher = require('../code/caesarCipher');

test('daniel solomon shift 3', () => {
    expect(caesarCipher(3, 'daniel solomon')).toBe('gdqlho vrorprq');
});

test('z to a shift 3', () => {
    expect(caesarCipher(3, 'zyxwvutsrqponmlkjihgfedcba')).toBe('cbazyxwvutsrqponmlkjihgfed');
});

test('z to a shift 0', () => {
    expect(caesarCipher(0, 'zyxwvutsrqponmlkjihgfedcba')).toBe('zyxwvutsrqponmlkjihgfedcba');
});

test('string with punctuation shift 3', () => {
    expect(caesarCipher(3, '- daniel, solomon!')).toBe('- gdqlho, vrorprq!');
});
