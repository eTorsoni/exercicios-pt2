//Crie applyFunction(fn, value) que aplica a função fn ao valor e retorna o resultado.

function applyFunction(fn, value) {
    return fn(value);
}

function double(n) {
    return n * 2;
}

console.log(applyFunction(double, 5)); // 10
