const indefinite_sum = require('./sum_indefinite');

test('No input parameter;input is not an array;empty array',()=>{
    expect(indefinite_sum()).toBe('Wrong input');
});

test('Valid Array is passed',()=>{
    expect(indefinite_sum([1,2,3])).toBe(6);
});

test('One or more parameters are invalid',()=>{
    expect(indefinite_sum([1,null,undefined])).toBe('Wrong input');
})