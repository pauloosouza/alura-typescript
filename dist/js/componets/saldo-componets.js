// Validação e verificação do formulário com saldo
import { formatarData, formatarMoeda } from "../Utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
renderizarSaldo();
function renderizarSaldo() {
    if (elementoSaldo !== null) {
        //elementoSaldo.textContent = saldo.toString(); // fez com que mostrasse na tela o saldo
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponents = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponents;
