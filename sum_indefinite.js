function sum_indefinite(arr){
    if(Array.isArray(arr) === true){
        var result = 0;
        for(var i = 0;i<arr.length;i++){
            if(typeof(arr[i]) !== 'number' || isNaN(arr[i]) || arr[i] === Infinity ){
                return "Wrong input";
            }
            result += arr[i];
        }
        return result;
    }
    return 'Wrong input';
}

module.exports = sum_indefinite;