"use strict";
module.exports = {
    perimetroCirculo: (raio) => {
        return Math.round(2 * Math.PI * raio);
    },
    perimetroTriangulo: (lado) => {
        return lado * 3;
    },
    perimetroRetangulo: (lado, altura) => {
        return (lado + altura) * 2;
    },
    perimetroQuadrado: (lado) => {
        return lado * 4;
    },
    perimetroParalelogramo: (ladoMenor, ladoMaior) => {
        return (ladoMenor + ladoMaior) * 2;
    },
    perimetroTrapezio: (ladoA, ladoB, ladoC, ladoD) => {
        return ladoA + ladoB + ladoC + ladoD;
    },
};
