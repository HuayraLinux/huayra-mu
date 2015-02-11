"use strict";
var fs = require('fs.extra');
var path = require('path');
var replaceStream = require('replacestream');
var exec = require('child_process').exec;

function modulo() {

  function es_archivo_de_texto(nombre_de_archivo) {
    var patron = /.py|.html|.json|.js|.md|.txt|Makefile|.css/g
    var valor = patron.test(nombre_de_archivo);

    return valor;
  }

  function _copyFileSync(source, target, nombre) {
    /* arma la ruta completa al archivo destino */
    target = path.join(target, path.basename(source));
    target = target.replace("TXT_NOMBRE", nombre);

    var targetFile = target;

    if (fs.existsSync(target)) {
      if (fs.lstatSync(target).isDirectory()) {
        targetFile = path.join(target, path.basename(source));
      }
    }


    if (es_archivo_de_texto(source)) {
      fs.createReadStream(source).
        pipe(replaceStream('TXT_NOMBRE', nombre)).
        pipe(fs.createWriteStream(targetFile));
    } else {
      fs.createReadStream(source).
        pipe(fs.createWriteStream(targetFile));
    }
  }

  function copyFolderRecursiveSync(source, target, nombre) {
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
          copyFolderRecursiveSync(curSource, targetFolder, nombre);
        } else {
          _copyFileSync(curSource, targetFolder, nombre);
        }
      });
    }
  }

  function crearDirectorio(ruta) {
    if (!fs.existsSync(ruta)) {
      fs.mkdirSync(ruta);
    }
  }

  function _reiniciarRepositorioGit(ruta_al_proyecto) {
    var directorio_git = path.join(ruta_al_proyecto, '.git');

    if (fs.existsSync(directorio_git)) {
      fs.rmrfSync(directorio_git);
    }

    exec('git init', {cwd: ruta_al_proyecto}, function(err, stdout, stderr) {
      //console.log(err, stdout, stderr);
    });

    //console.log("Generando el directorio .git en :" + directorio_git);
  }


  function instanciarPlantilla(nombre_de_plantilla, nombre, destino, on_done) {
    var dir_actual = path.resolve(__dirname);
    var ruta_a_plantilla = path.join(dir_actual, '..', 'data', 'plantillas', nombre_de_plantilla);
    var nombre_temporal = "__" + nombre
    var ruta_destino_temporal = path.join(destino, nombre_temporal);
    var ruta_destino_final = path.join(destino, nombre);

    crearDirectorio(ruta_destino_temporal);
    copyFolderRecursiveSync(ruta_a_plantilla, ruta_destino_temporal, nombre);

    fs.move(path.join(ruta_destino_temporal, nombre_de_plantilla), ruta_destino_final, function (err) {
      if (err) {
        throw err;
      }

      fs.rmrfSync(ruta_destino_temporal);

      console.log("Creando el directorio: " + ruta_destino_final);

      _reiniciarRepositorioGit(ruta_destino_final);

      if (on_done)
        on_done.call(this);

    });


  }


  return {
    crearDirectorio: crearDirectorio,
    instanciarPlantilla: instanciarPlantilla,
    es_archivo_de_texto: es_archivo_de_texto
  };
}


var Modulo = modulo();

module.exports = Modulo;
