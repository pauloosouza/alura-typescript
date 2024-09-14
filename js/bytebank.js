// Validação e verificação do formulário com saldo
var saldo = 3000;
var elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoSaldo !== null) {
    elementoSaldo.textContent = saldo.toString(); // fez com que mostrasse na tela o saldo
}
var elementoFormlario = document.querySelector('.block-nova-transacao form');
elementoFormlario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!elementoFormlario.checkValidity()) {
        alert(' Por favor preencha todos os campos da transação!');
        return;
    }
    // Coletar od cados de cada elementos transação  - valor - data - e poder registar
    var inputTipoTransacao = elementoFormlario.querySelector('#tipoTransacao');
    var inputValor = elementoFormlario.querySelector('#valor');
    var inputData = elementoFormlario.querySelector('#data');
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    // Fazendo uma condição para que seja alterado o valor do seu saldo adicionar ou retirar
    if (tipoTransacao == "Depósito") {
        saldo += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação inválida ");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    // Aqui entra o objeto que vai representar uma nova transação
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormlario.reset(); // Limpar o formulário todo uma vez que utilizado 
});
