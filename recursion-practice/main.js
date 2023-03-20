function sumRange(n){
    if (n<=0){
        return 0;
    }
    return n + sumRange(n-1)
}

let answer = sumRange(3);
console.log(answer);