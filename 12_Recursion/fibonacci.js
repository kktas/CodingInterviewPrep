let fibonacciIterativeArr = [0, 1];
const fibonacciIterative = (n) => {
    if (n <= 2) return fibonacciIterativeArr[n - 1];

    for (let i = 2; i < n; i++) {
        fibonacciIterativeArr[i] = fibonacciIterativeArr[i - 1] + fibonacciIterativeArr[i - 2];
    }
    return fibonacciIterativeArr[n - 1];
}

const fibonacciRecursive = (n) => {
    if (n <= 2) return n - 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(3));
console.log(fibonacciRecursive(3));

console.log(fibonacciIterative(5));
console.log(fibonacciRecursive(5));

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));

console.log(fibonacciIterative(7));
console.log(fibonacciRecursive(7));

