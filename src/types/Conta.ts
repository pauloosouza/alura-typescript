import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo: number = 3000;

// Validação de entrada e saida de valor que seja menor que zero  
function debitar(valor: number): void {
    if (valor <= 0){
        throw new Error("O valor a ser debitado deve ser maior que zero");
    }
    if(valor > saldo){
        throw new Error("Saldo insuficiente");
    }

    saldo -= valor;

}
// FIM DO DEBITAR  

function depositar(valor: number): void {
    if (valor <= 0){
        throw new Error("O valor a ser depositado deve ser maior que zero");
    }
    saldo += valor;
}

const Conta = {
    getSaldo (){
        return saldo;
    },

    getDataAcesso(): Date{
        return new Date();
    },

    registrarTransacao(novaTransacao: Transacao): void {
    // Fazendo uma condição para que seja alterado o valor do seu saldo adicionar ou retirar
    if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
        depositar(novaTransacao.valor);
    }
    else if (novaTransacao.tipoTransacao == TipoTransacao.TRANFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO)    {
        debitar(novaTransacao.valor);
    }
    else{
        throw new Error("Tipo de transação é invalido"); // Notificar de um erro        
    }

    console.log(novaTransacao);
 }
}

export default Conta;