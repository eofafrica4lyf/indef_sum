function sum_indefinite(arr){
    if(Array.isArray(arr) === true){
        var result = 0;
        for(var i = 0;i<arr.length;i++){
            if(typeof(arr[i]) !== 'number'){
                return "Wrong input";
            }
            if(isNaN(arr[i])){
                return 'kjdfnkd';
            }
            result += arr[i];
        }
        return result;
    }
    return 'Wrong input';
}

module.exports = sum_indefinite;