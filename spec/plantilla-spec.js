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
