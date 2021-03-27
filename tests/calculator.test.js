const Calculator = require('../code/calculator');

test('calculator', () => {
    expect(Calculator.add(2, 2)).toBe(4);
    expect(Calculator.substract(2, 2)).toBe(0);
    expect(Calculator.divide(2, 2)).toBe(1);
    expect(Calculator.multiply(2, 2)).toBe(4);
});