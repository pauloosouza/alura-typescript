import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo: number = 3000;

const Conta = {
    getSaldo (){
        return saldo;
    },
    getDataAcesso(): Date{
        return new Date();
    },
    registrarTransacao(novaTransacao: Transacao): void{
    // Fazendo uma condição para que seja alterado o valor do seu saldo adicionar ou retirar
    if(novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO){
        saldo += novaTransacao.valor;  
    }
    else if (novaTransacao.tipoTransacao == TipoTransacao.TRANFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO){
        saldo -= novaTransacao.valor;
    }
    else{
        alert("Tipo de transação inválida ");
        return;
    }

    console.log(novaTransacao);
 }
}

export default Conta;