const config = require("./dist/config");
const operacoes = require("./dist/Operacoes");
const geometria = require("./dist/Geometria");
const math = require("./dist/Math");
const equacoes = require("./dist/Equacoes");
const media = require("./dist/Media");
const conversor = require("./dist/Conversor");

module.exports = {
  ...config,
  ...operacoes,
  ...geometria,
  ...math,
  ...equacoes,
  ...media,
  ...conversor,
};
