import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(101)).toBe("extra large");
    expect(functions.size(2000000)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Is the number even?', () => {
    expect(functions.isEven(2)).toBe(true);
    expect(functions.isEven(1)).toBe(false);
    expect(functions.isEven(-1)).toBe(false);
    expect(functions.isEven(-2)).toBe(true);
});

test('Does the substract function work?', () => {
    expect(functions.subtract(1,2)).toBe(-1);
    expect(functions.subtract(70,27)).toBe(43);
});

test('Does the multiply function work?', () => {
    expect(functions.multiply(4,5)).toBe(20);
    expect(functions.multiply(2,7)).toBe(14);
});

test('Does the divide function work?', () => {
    expect(functions.divide(30,10)).toBe(3);
    expect(functions.divide(27,3)).toBe(9);
});

test('Does get values work?', () => {
    document.body.innerHTML =
    '<div>' +
        '<input id="var1" type="number" value="2">' +
        '<input id="var2" type="number" value="3">' +
    '</div>';

    expect(functions.getValues()).toStrictEqual([2,3]);
});

test('Does earningsBrackets work?', () => {
    expect(functions.earningsBrackets(100000)).toStrictEqual([0,0,2931,48534,48535]);
    expect(functions.earningsBrackets(220000)).toStrictEqual([5632,63895,53404,48534,48535]);
});

test('Does bracketTaxes work?', () => {
    expect(functions.bracketTaxes([0,0,2931,48534,48535])).toBe(17991.78);
    expect(functions.bracketTaxes([5632,63895,53404,48534,48535])).toBe(51502.87);
})