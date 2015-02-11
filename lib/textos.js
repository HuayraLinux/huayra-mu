"use strict";
var fs = require('fs');
var marked = require('marked');
var Renderer = require('marked-terminal');
var package_json = require('../package.json');

function modulo() {
  var r = new Renderer();

  marked.setOptions({
    renderer: r
  });

  function _obtener_texto(archivo) {
    var data = fs.readFileSync(__dirname + "/../data/textos/" + archivo).toString();
    return data;
  }

  function imprimirAyuda(omitir) {
    var omitir = omitir || false;
    var texto = _obtener_texto('ayuda.md');

    if (!omitir) {
      console.log(marked(texto));
    }

    return texto;
  }

  function imprimirIntro(omitir) {
    var omitir = omitir || false;
    var texto = _obtener_texto('intro.md');

    if (!omitir) {
      var color_secundario = '\x1b[32;01m';
      var color = '\x1b[35;01m';
      var restaurar = '\x1b[0m';
      var version = package_json.version;

      texto = texto.replace('VERSION', version);
      texto = texto.replace(/C/g, color);
      texto = texto.replace(/S/g, color_secundario);
      texto = texto.replace(/R/g, restaurar);


      console.log(texto);
    }

    return texto;
  }

  return {
    imprimirAyuda: imprimirAyuda,
    imprimirIntro: imprimirIntro,
  }
}

var Modulo = modulo();

module.exports = Modulo;
