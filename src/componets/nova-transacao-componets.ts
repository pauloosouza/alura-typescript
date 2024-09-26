import { Transacao } from "../types/Transacao.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import SaldoComponents from "./saldo-componets.js";
import Conta from "../types/Conta.js";

const elementoFormlario = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormlario.addEventListener('submit', function(event){
    event.preventDefault();
    if(!elementoFormlario.checkValidity()){
        alert(' Por favor preencha todos os campos da transação!');
        return;
    }

    // Coletar od cados de cada elementos transação  - valor - data - e poder registar

    const inputTipoTransacao = elementoFormlario.querySelector('#tipoTransacao' ) as HTMLSelectElement;
    const inputValor = elementoFormlario.querySelector('#valor')as HTMLInputElement;
    const inputData = elementoFormlario.querySelector('#data')as HTMLInputElement;

    let tipoTransacao:TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor:number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    // Aqui entra o objeto que vai representar uma nova transação

    const novaTransacao:Transacao =  {
        tipoTransacao: tipoTransacao, 
        valor: valor,
        data:data,
    }

    Conta.registrarTransacao(novaTransacao);
    SaldoComponents.atualizar();
    elementoFormlario.reset(); // Limpar o formulário todo uma vez que utilizado 
});