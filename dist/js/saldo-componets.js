// Validação e verificação do formulário com saldo
let saldo = 3000;
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString(); // fez com que mostrasse na tela o saldo
}
