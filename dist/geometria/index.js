"use strict";
const area = require("./area");
const perimetro = require("./perimetro");
module.exports = Object.assign(Object.assign({}, area), perimetro);
