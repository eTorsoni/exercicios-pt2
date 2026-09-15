//Crie um array operations com funções de soma, subtração e multiplicação. Itere sobre ele aplicando aos números 4 e 2.

const operations = [
    function (a, b) {
        return a + b;
    },

    function (a, b) {
        return a - b;
    },

    function (a, b) {
        return a * b;
    }
];

operations.forEach(function (operation) {
    console.log(operation(4, 2));
});

// Resultado:
// 6
// 2
// 8
