"use strict";
var fs = require('fs');

function modulo() {

  function _copyFileSync(source, target) {

    var targetFile = target;

    if (fs.existsSync(target)) {
      if (fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
      }
    }

    fs.createReadStream(source).pipe(fs.createWriteStream(targetFile));
  }

  function copyFolderRecursiveSync(source, target) {
    var files = [];

    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder);
    }

    if (fs.lstatSync(source).isDirectory()) {
      files = fs.readdirSync(source);
      files.forEach(function (file) {
        var curSource = path.join(source, file);
        if (fs.lstatSync(curSource).isDirectory()) {
          copyFolderRecursiveSync(curSource, targetFolder);
        } else {
          _copyFileSync(curSource, targetFolder);
        }
      });
    }
  }

  function crearDirectorio(ruta) {
    if (!fs.existsSync(ruta)) {
      fs.mkdirSync(ruta);
    }
  }



  return {
    crearDirectorio: crearDirectorio,
  };
}


var Modulo = modulo();

module.exports = Modulo;
