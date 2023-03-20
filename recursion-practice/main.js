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

let answer = power(3,5);
console.log(answer);