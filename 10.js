//Crie formatMessage(msg, formatter) que aplica a função formatter à mensagem.

function formatMessage(msg, formatter) {
    return formatter(msg);
}

function toUpperCase(message) {
    return message.toUpperCase();
}

console.log(formatMessage("Olá mundo", toUpperCase));
// OLÁ MUNDO
