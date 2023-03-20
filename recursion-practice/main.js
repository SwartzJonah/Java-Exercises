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

function contains(object, value){
    for(let child in object){
        if(typeof object[child] === "object"){
            return contains(object[child], value);
        }

        if(object[child] == value){
            return true;
        }
    }
    return false;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


function totalIntegers(array){
    let total = 0;
    if (array.length === 0){
        return 0;
    }
    let test = array.shift();
    if(typeof(test) === 'object'){
        total += totalIntegers(test);
    } else if (typeof(test) === 'number'){
        total += 1;
    }

    return total + totalIntegers(array);
}

let answer = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);
console.log(answer);