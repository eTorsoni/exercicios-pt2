//Crie countToFive() que usa setInterval para contar até 5 e depois parar.

function countToFive() {
    let count = 1;

    const interval = setInterval(function () {
        console.log(count);

        if (count === 5) {
            clearInterval(interval);
        }

        count++;
    }, 1000);
}

countToFive();