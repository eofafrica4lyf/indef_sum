const indefinite_sum = require('./sum_indefinite');

test('No input parameter;input is not an array;empty array',()=>{
    expect(indefinite_sum()).toBe('Wrong input');
});

test('Valid Array is passed',()=>{
    expect(indefinite_sum([1,2,3])).toBe(6);
});

test('One or more parameters are invalid',()=>{
    expect(indefinite_sum([1,null,undefined])).toBe('Wrong input');
});

test('One or more parameter(s) is NaN',()=>{
    expect(indefinite_sum([NaN,2,4,5,5])).toBe('Wrong input');
});

test('One or more parameter(s) is Infinity',()=>{
    expect(indefinite_sum([Infinity,2,4,5,5])).toBe('Wrong input');
});

test('Rounding Floats',()=>{
    expect(indefinite_sum([0.1,0.2])).toBeCloseTo(0.3);
})