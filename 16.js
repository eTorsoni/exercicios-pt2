//Crie um objeto com método arrow sayThis() e analise como this se comporta. Compare com função tradicional.

const user2 = {
    name: "Emanuele",

    sayThis: function () {
        console.log(this);
    }
};

user2.sayThis();
