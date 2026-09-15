//Crie countDown(n) que imprima de n até 1 recursivamente no console.

function countDown(n) {
    if (n < 1) {
        return;
    }

    console.log(n);
    countDown(n - 1);
}

countDown(5);

// Resultado:
// 5
// 4
// 3
// 2
// 1
