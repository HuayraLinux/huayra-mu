var plantillas = require('../lib/plantillas');
var fs = require('fs');
var exec = require('child_process').exec;

describe("Tiene que poder instanciar una plantilla", function() {

  it("puede crear un directorio temporal.", function(){

    plantillas.crearDirectorio('tmp');

    if (fs.existsSync('tmp')) {
      exec('rm -r -f tmp');
    }

    expect(fs.existsSync('tmp')).toBe(true);

    plantillas.instanciarPlantilla('html', 'ejemplo', 'tmp');
    expect(fs.existsSync('tmp/ejemplo')).toBe(true);

  });

});
