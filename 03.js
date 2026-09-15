//Implemente factorial(n) usando recursão para calcular o fatorial de n.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
