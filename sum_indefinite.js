function sum_indefinite(arr){
    if(Array.isArray(arr) === true){
        return arr.reduce((a, b) => a + b, 0);
    }
    return 'Wrong input';
}

module.exports = sum_indefinite;