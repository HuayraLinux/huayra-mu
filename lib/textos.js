var fs = require('fs');
var marked = require('marked');
var Renderer = require('marked-terminal');

function modulo() {
  var r = new Renderer();

  marked.setOptions({
    renderer: r
  });

  function _obtener_texto(archivo) {
    var data = fs.readFileSync(__dirname + "/../data/textos/" + archivo).toString();
    return data;
  }

  function imprimirAyuda() {
    console.log(marked(_obtener_texto('ayuda.md')));
  }

  function imprimirIntro() {
    console.log(_obtener_texto('intro.md'));
  }

  return {
    imprimirAyuda: imprimirAyuda,
    imprimirIntro: imprimirIntro,
  }
}

var Modulo = modulo();

module.exports = Modulo;
