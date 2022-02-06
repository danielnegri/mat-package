"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtracao = exports.divisao = exports.multiplicacao = exports.soma = void 0;
const CRR = 10;
function soma(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return null;
    }
    return (n1 * CRR + n2 * CRR) / CRR;
}
exports.soma = soma;
function multiplicacao(n1, n2) {
    return n1 * n2;
}
exports.multiplicacao = multiplicacao;
function divisao(n1, n2) {
    return n1 / n2;
}
exports.divisao = divisao;
function subtracao(n1, n2) {
    return n1 - n2;
}
exports.subtracao = subtracao;
