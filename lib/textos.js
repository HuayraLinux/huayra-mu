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
