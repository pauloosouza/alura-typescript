// Validação e verificação do formulário com saldo

let saldo = 3000;

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement; 

if (elementoSaldo !== null){

    elementoSaldo.textContent = saldo.toString(); // fez com que mostrasse na tela o saldo
}


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

    let tipoTransacao:string = inputTipoTransacao.value;
    let valor:number = inputValor.valueAsNumber;
    let data = new Date( inputData.value);

    // Fazendo uma condição para que seja alterado o valor do seu saldo adicionar ou retirar

    if(tipoTransacao == "Depósito"){
        saldo += valor;
        
    }else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto"){
        saldo -= valor;
    }else{
        alert("Tipo de transação inválida ");
        return;
    }

    elementoSaldo.textContent = saldo.toString();
    // Aqui entra o objeto que vai representar uma nova transação

    const novaTransacao = {
        tipoTransacao: tipoTransacao, 
        valor: valor,
        data:data
    }

    console.log(novaTransacao);
    elementoFormlario.reset(); // Limpar o formulário todo uma vez que utilizado 
});

