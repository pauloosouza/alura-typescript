// Validação e verificação do formulário com saldo

let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor');

elementoSaldo.textContent = saldo ; // fez com que mostrasse na tela o saldo

const elementoFormlario = document.querySelector('.block-nova-transacao form');
elementoFormlario.addEventListener('submit', function(event){
    event.preventDefault();
    if(!elementoFormlario.checkValidity()){
        alert(' Por favor preencha todos os campos da transação!');
        return;
    }

    // Coletar od cados de cada elementos transação  - valor - data - e poder registar

    const inputTipoTransacao = elementoFormlario.querySelector('#tipoTransacao');
    const inputValor = elementoFormlario.querySelector('#valor');
    const inputData = elementoFormlario.querySelector('#data');

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    // Aqui entra o objeto que vai representar uma nova transação

    const novaTransacao = {
        tipoTransacao: tipoTransacao, 
        valor: valor,
        data:data
    }

    console.log(novaTransacao);
    elementoFormlario.reset(); // Limpar o formulário todo uma vez que utilizado 
});

