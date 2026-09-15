//Crie a função validateNumber(n) que retorna true se n for do tipo number, ou lança um erro caso contrário.

function validateNumber(n) {
    if (typeof n !== "number") {
        throw new Error("O valor deve ser um número.");
    }

    return true;
}

console.log(validateNumber(10)); // true
console.log(validateNumber(3.14)); // true

// console.log(validateNumber("10")); // Erro