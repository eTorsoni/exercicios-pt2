//Crie fakeRequest(url, callback) que usa setTimeout e chama callback(null, "OK") após 1s.

function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, 'OK');
  }, 1000);
}

if (require.main === module) {
  fakeRequest('https://exemplo.com', (error, result) => {
    console.log('Resultado:', result);
  });
}

module.exports = { fakeRequest };