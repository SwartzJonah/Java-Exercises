function sumRange(n){
    if (n<=0){
        return 0;
    }
    return n + sumRange(n-1)
}

function power(base, exp){
    if (exp <= 1){
        return base;
    }
    return base * power(base, exp - 1);
}

function factorial(n){
    if (n<=1){
        return n
    }
    return n * factorial(n-1);
}

function all(array, callback){
    let test = array.slice();

    if(test.length <= 0){
        return true;
    }
    if(callback(test[0])){
        test.shift();
        return all(test, callback);
    } else {
        return false;
    }
}

var allAreLessThanSeven = all([1,2,6,18], function(num){
	return num < 10;
});

function productOfArray(array){
    let test = array.slice();
    let number = test[0];
    if (test.length <= 1){
        return test[0];
    }
    test.shift(); 
    return number * productOfArray(test)
}

let answer = productOfArray([3,2,5])
console.log(answer);