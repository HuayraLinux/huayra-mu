var chalk = require('chalk');
var textos = require('./textos');
var inquirer = require("inquirer");

var nombre;

var preguntas = [
{
  type: "input",
  name: "nombre",
  message: "¿Como se llamará tu aplicación?",
  //default: function () { return "inicia l";},
  validate: function(value) {
    var pass = value.match(/^[a-z]+[-_]*[a-z]+$/i);

    if (pass) {
      return true;
    } else {
      return "Por favor elegí un nombre que solo contenga letras (a lo sumo algún guión).";
    }
  }
},

];


function crear_plantilla_html5() {
  console.log("Creando plantilla para html5");
}

function crear_plantilla_ember() {
  console.log("Creando plantilla para ember");
}

function crear_plantilla_pilasengine() {
  console.log("Creando plantilla para pilasengine::" + nombre);
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
    new inquirer.Separator(),
    //"Ingresar al tutorial para tener una guia sobre estas tecnologías",
    "¿ayuda?",
    "prefiero salir",
    ]
  };

  inquirer.prompt(pregunta, function(respuesta) {
    console.log(respuesta);

    if (respuesta.stack === "html5") {
      crear_plantilla_html5();
    }

    if (respuesta.stack === "ember") {
      crear_plantilla_ember();
    }

    if (respuesta.stack === "pilas-engine") {
      crear_plantilla_pilasengine();
    }

    if (respuesta.stack === "¿ayuda?") {
      textos.imprimirAyuda();
      esperar_ok(menu_elegir_stack);
    }

    if (respuesta.stack === "prefiero salir") {
      console.log(chalk.gray("ohh... ¡chau!"));
      process.exit(0);
    }

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
  console.log(chalk.gray(" (consejo: pulsá las teclas 'CTRL C' si las cosas se ponen feas...)"));
  console.log("");
}

function iniciar() {
  imprimir_pantalla_inicial();
  menu_crear_proyecto();
}


module.exports = {iniciar: iniciar};
