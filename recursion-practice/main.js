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

let answer = factorial(5)
console.log(answer);