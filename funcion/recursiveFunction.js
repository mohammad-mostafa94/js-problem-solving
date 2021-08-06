function factorial(n) {
    if (n == 1) {
        return 1;
    }
    // console.log(n);
    return n * factorial(n - 1);
}

const result = factorial(4);
console.log(result);