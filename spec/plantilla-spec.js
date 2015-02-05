var fs = require('fs');
var path = require('path');
var execSync = require('exec-sync');

var plantillas = require('../lib/plantillas');

describe("Tiene que poder instanciar una plantilla", function() {

  it("puede crear un directorio temporal.", function(){
    var nombre_de_la_aplicacion = 'miapp-html5'


    if (fs.existsSync('tmp')) {
      execSync('rm -r -f tmp');
    }

    plantillas.crearDirectorio('tmp');

    expect(fs.existsSync('tmp')).toBe(true);

    plantillas.instanciarPlantilla('html5', nombre_de_la_aplicacion, 'tmp', function() {
      expect(fs.existsSync(path.join('tmp', nombre_de_la_aplicacion))).toBe(true);
      expect(fs.existsSync(path.join('tmp', nombre_de_la_aplicacion, 'Makefile'))).toBe(true);
    });

  });

});


describe("Tiene que poder entender el tipo de archivo", function() {

  it("Detecta archivos de texto.", function() {
    expect(plantillas.es_archivo_de_texto('pepe.txt')).toBe(true);
    expect(plantillas.es_archivo_de_texto('pepe.html')).toBe(true);
    expect(plantillas.es_archivo_de_texto('algo/pepe.html')).toBe(true);

    expect(plantillas.es_archivo_de_texto('pepe.png')).toBe(false);
    expect(plantillas.es_archivo_de_texto('pepe.jpg')).toBe(false);
    expect(plantillas.es_archivo_de_texto('pepe.zip')).toBe(false);
  });

});
