"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(condicao, mensagem) {
    if (!condicao) {
        throw new Error(`mat-package asserção ${mensagem}`);
    }
}
exports.default = assert;
