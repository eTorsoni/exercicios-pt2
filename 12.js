//Faça três chamadas encadeadas a fakeRequest, cada uma dentro da anterior.

function fakeRequest(url, callback) {
    setTimeout(function () {
        callback(null, "OK");
    }, 1000);
}

fakeRequest("url1", function (error, result) {
    console.log("Primeira chamada:", result);

    fakeRequest("url2", function (error, result) {
        console.log("Segunda chamada:", result);

        fakeRequest("url3", function (error, result) {
            console.log("Terceira chamada:", result);
        });
    });
});
