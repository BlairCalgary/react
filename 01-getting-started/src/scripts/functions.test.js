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
    expect(functions.add(20,30)).toBe(50);
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

test('Does fedTaxes work?', () => {
    expect(functions.fedTaxes(50000)).toBe(7580.58);
    expect(functions.fedTaxes(75000)).toBe(12705.58);
    expect(functions.fedTaxes(100000)).toBe(17991.78);
    expect(functions.fedTaxes(220000)).toBe(51502.87);
    
});


// <--- Working With Arrays Exercise Starts Here --->
test('add number to array?', () => {
    expect(functions.addNumToArray([0,1],2)).toStrictEqual([0,1,2]);
    expect(functions.addNumToArray([9,8],7)).toStrictEqual([9,8,7]);
});
test('total array?', () => {
    expect(functions.totalArray([2,3,4])).toBe(9);
    expect(functions.totalArray([10,20,30])).toBe(60);
});
test('does clear array work?', () => {
    expect(functions.clearArray([1,2,3])).toStrictEqual([]);
    expect(functions.clearArray([9,8,7])).toStrictEqual([]);
});
test('province lookup?', () => {
    expect(functions.lookupProv('AB')).toBe('Alberta');
    expect(functions.lookupProv('NT')).toBe('Northwest Territories');
    expect(functions.lookupProv('ZZ')).toBe('Not a valid province code.');
});