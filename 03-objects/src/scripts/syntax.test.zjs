import syntax from './syntax.js'
// number
test('Add two', () => {
    expect(syntax.addTwo(2)).toBe(4);
    expect(syntax.addTwo(1)).toBe(3);
});

// string
test('Add Hone', () => {
    expect(syntax.addHone('blair')).toBe('blairHone');
    expect(syntax.addHone(1)).toBe('1Hone');
});

// boolean
test('Is name Blair?', () => {
    expect(syntax.isNameBlair('Blair')).toBe(true);
    expect(syntax.isNameBlair('dennis')).toBe(false);
});

test('Is variable a boolean?', () => {
    expect(syntax.isBoolean(false)).toBe(true);
    expect(syntax.isBoolean('blair')).toBe(false);
});

// array
test('Is variable an array?', () => {
    expect(syntax.isArray([0,1,2])).toBe(true);
    expect(syntax.isArray({a:1,b:2,c:3})).toBe(false);
    expect(syntax.isArray('blair')).toBe(false);

});
// dictionary / objects
test('Is variable an object?', () => {
    expect(syntax.isObject({a: 1, b: 2, c: 3})).toBe(true);
    expect(syntax.isObject(556)).toBe(false);
    expect(syntax.isObject([0,1,2])).toBe(false);
});
// undefined
test('Is variable undefined?', () => {
    expect(syntax.isUndefined([][0])).toBe(true);
    expect(syntax.isUndefined([1][0])).toBe(false);

});
// sample if / else
test('Is even?', () => {
    expect(syntax.isEven(2)).toBe(true);
    expect(syntax.isEven(1)).toBe(false);
});
// add to the front
test('add to the front', () => {
    expect(syntax.addToFront([1,2,3])).toStrictEqual([0,1,2,3]);
    expect(syntax.addToFront([99])).toStrictEqual([0,99]);
});
// add to the end
test('add to the end', () => {
    expect(syntax.addToEnd([1,2,3])).toStrictEqual([1,2,3,9]);
    expect(syntax.addToEnd([99])).toStrictEqual([99,9]);
});
// update values
test('update value to blair', () => {
    expect(syntax.updateValue('matthew')).toBe('blair');
    expect(syntax.updateValue('hone')).toBe('blair');
});
// for
test('does for loop work', () => {
    expect(syntax.forLoop([0,1,2,3])).toStrictEqual([0,2,4,6]);
    expect(syntax.forLoop([4,3,2,1])).toStrictEqual([8,6,4,2]);
});
// for/in
test(`does for/in loop work`, () => {
    expect(syntax.squareValues({a:0,b:1,c:2})).toStrictEqual({a:0,b:1,c:4});
    expect(syntax.squareValues({a:4,b:3,c:2})).toStrictEqual({a:16,b:9,c:4});
});
// while
test('does while loop work', () => {
    expect(syntax.whileLoop(5)).toBe('55555');
    expect(syntax.whileLoop(9)).toBe('999999999');
});
// do while
test('does do hile loop work', () => {
    expect(syntax.doWhileLoop(3)).toBe('123');
    expect(syntax.doWhileLoop(9)).toBe('123456789');
});
// forEach (with array and function)
test('does for each loop work', () => {
    expect(syntax.forEachLoop([2,4,8])).toStrictEqual([4,8,16]);
    expect(syntax.forEachLoop([7,11,50])).toStrictEqual([14,22,100]);
});
// declare object
test('convert 2 arrays to object', () => {
    expect(syntax.arraysToObject(['a','b','c'],[1,2,3])).toStrictEqual({a:1,b:2,c:3});
    expect(syntax.arraysToObject(['x','y','z'],[97,98,99])).toStrictEqual({x:97,y:98,z:99});
});
// lookup key to retrieve value
test('new object', () => {
    expect(syntax.lookupKey({'buddha':108})).toBe(108);
    expect(syntax.lookupKey({'foldpath':8})).toBe(8);
});
