const factorialIterative = (n) => {
    let result = n;

    for (let i = n - 1; i > 1; i--) {
        result = result * i;
    }
    return result;
}

const factorialRecursive = (n) => {
    if (n == 2) return 2;
    return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));

console.log(factorialIterative(6));
console.log(factorialRecursive(6));

console.log(factorialIterative(7));
console.log(factorialRecursive(7));


