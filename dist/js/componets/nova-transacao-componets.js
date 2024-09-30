import SaldoComponents from "./saldo-componets.js";
import Conta from "../types/Conta.js";
const elementoFormlario = document.querySelector('.block-nova-transacao form');
elementoFormlario.addEventListener('submit', function (event) {
    try {
        event.preventDefault();
        if (!elementoFormlario.checkValidity()) {
            alert(' Por favor preencha todos os campos da transação!');
            return;
        }
        // Coletar od cados de cada elementos transação  - valor - data - e poder registar
        const inputTipoTransacao = elementoFormlario.querySelector('#tipoTransacao');
        const inputValor = elementoFormlario.querySelector('#valor');
        const inputData = elementoFormlario.querySelector('#data');
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        // Aqui entra o objeto que vai representar uma nova transação
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponents.atualizar();
        elementoFormlario.reset(); // Limpar o formulário todo uma vez que utilizado 
    }
    catch (erro) {
        alert(erro.message);
        console.error(erro);
    }
});
