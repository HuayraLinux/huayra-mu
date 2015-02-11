var fs = require('fs');
var chalk = require('chalk');
var inquirer = require("inquirer");
var program = require('commander');
var package_json = require('../package.json');

var textos = require('./textos');
var plantillas = require('./plantillas');


// Nombre de la aplicación que elige el usuario.
var nombre;

var preguntas = [
{
  type: "input",
  name: "nombre",
  message: "¿Como se llamará tu aplicación?",

  validate: function(value) {
    var pass = value.match(/^[a-z]+[-_]*[a-z]+$/i);

    if (pass) {

      if (fs.existsSync(value)) {
        return "Hey, ya existe este directorio ... elegí otro nombre";
      }

      return true;

    } else {
      return "Por favor elegí un nombre que solo contenga letras (a lo sumo algún guión).";
    }
  }
},

];


function crear_plantilla_html5() {
  plantillas.instanciarPlantilla('html5', nombre, './');
}

function crear_plantilla_ember() {
  var plantilla = "nwjs-ember-seed";
  plantillas.instanciarPlantilla(plantilla, nombre, './');
}

function crear_plantilla_pilasengine() {
  plantillas.instanciarPlantilla('pilas', nombre, './');
}

function crear_plantilla_reveal() {
  plantillas.instanciarPlantilla('reveal', nombre, './');
}

function menu_elegir_stack() {
  var pregunta = {
    type: "list",
    name: "stack",
    message: "¿Que tecnología te gustaría usar aquí?",
    choices: [
    "html5",
    "ember",
    "pilas-engine",
    "reveal",
    new inquirer.Separator(),
    "¿ayuda?",
    "prefiero salir",
    ]
  };

  inquirer.prompt(pregunta, function(respuesta) {

    if (respuesta.stack === "¿ayuda?") {
      textos.imprimirAyuda();
      esperar_ok(menu_elegir_stack);
      return;
    }

    if (respuesta.stack === "prefiero salir") {
      console.log(chalk.gray("ohh... ¡chau!"));
      process.exit(0);
    }

    if (respuesta.stack === "html5") {
      crear_plantilla_html5();
    }

    if (respuesta.stack === "ember") {
      crear_plantilla_ember();
    }

    if (respuesta.stack === "pilas-engine") {
      crear_plantilla_pilasengine();
    }

    if (respuesta.stack === "reveal") {
      crear_plantilla_reveal();
    }

    console.log("");
    console.log(chalk.green("Se ha creado el directorio ") + chalk.red(nombre));
    console.log("");
    console.log(chalk.green("Te recomiendo ejecutar estos comandos para continuar: "));
    console.log("");
    console.log(chalk.yellow("   cd " + nombre));
    console.log(chalk.yellow("   make iniciar"));
    console.log("");
    console.log(chalk.green("y por último, para ver el resto de los comandos disponibles:"));
    console.log("");
    console.log(chalk.yellow("   make"));
    console.log("");

  });
}

function esperar_ok(luego) {
  var pregunta = {
    type: "list",
    name: "__",
    message: "¿Continuamos?",
    choices: [
    "ok",
    ]
  };

  inquirer.prompt(pregunta, function(respuesta) {
    luego.call(this);
  });
}

function menu_crear_proyecto() {
  inquirer.prompt(preguntas, function(respuesta) {
    nombre = respuesta.nombre;
    menu_elegir_stack();
  });
}

function imprimir_pantalla_inicial() {
  textos.imprimirIntro();
  console.log(chalk.blue(" (consejo: pulsá las teclas 'CTRL C' si las cosas se ponen feas...)"));
  console.log("");
}

function iniciar() {
program
  .version(package_json.version)
  .description('Un generador de aplicaciones')
  .option('-i, --iniciar', 'Iniciar un proyecto nuevo')
  .parse(process.argv);

  if (!program.args.length || proyecto.iniciar) {
    imprimir_pantalla_inicial();
    menu_crear_proyecto();
    return;
  }

}


module.exports = {iniciar: iniciar};
