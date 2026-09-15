//Crie validateUser(name, age) que retorna true apenas se name for uma string não vazia e age um número maior ou igual a zero.

function validateUser(name, age) {
    if (typeof name !== "string" || name.trim() === "") {
        return false;
    }

    if (typeof age !== "number" || age < 0) {
        return false;
    }

    return true;
}

console.log(validateUser("João", 20)); // true
console.log(validateUser("", 20)); // false
console.log(validateUser("Maria", -1)); // false
