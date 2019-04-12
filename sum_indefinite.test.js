const indefinite_sum = require('./sum_indefinite');

test('No input parameter;input is not an array;empty array',()=>{
    expect(indefinite_sum()).toBe('Wrong input');
});

