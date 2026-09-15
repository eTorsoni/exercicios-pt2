//Crie um objeto user com uma propriedade sayHi que seja uma function expression.

const user = {
    name: "Giovanna",

    sayHi: function () {
        return `Olá, ${this.name}!`;
    }
};

console.log(user.sayHi()); // Olá, Maria!
