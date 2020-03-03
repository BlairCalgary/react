import functions from './daily.js'

// convert to F
test('Convert to F', () => {
    expect(functions.convertToF(21)).toBe(69.8);
    expect(functions.convertToF(15)).toBe(59);
    expect(functions.convertToF(-11)).toBe(12.2);
    expect(functions.convertToF(-30)).toBe(-22);
});