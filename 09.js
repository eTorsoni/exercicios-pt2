//Crie calculate(a, b, callback) que aplica o callback aos dois valores.

function calculate(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

console.log(calculate(10, 5, sum)); // 15
