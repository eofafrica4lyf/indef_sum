const indefinite_sum = require('./sum_indefinite');

test('No input parameter',()=>{
    expect(indefinite_sum()).toBe(0);
})