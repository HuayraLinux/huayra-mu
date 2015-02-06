# huayra-mu

[![Build Status](https://travis-ci.org/hugoruscitti/huayra-mu.svg?branch=master)](https://travis-ci.org/hugoruscitti/huayra-mu)

Un asistente para crear la estructura inicial
de proyectos, inspirado en yeoman y ember-cli.

huayra-mu ayuda a desarrollar siguiendo buenas
prácticas, evitando el trabajo inicial y repetitivo
que se puede generalizar y que todo proyecto tiene.

El objetivo principal es brindar estructuras para
proyectos de software, como videojuegos o aplicaciones
de escritorio, pero también incluye otras cosas como
generadores para realizar presentaciones.

![](https://github.com/hugoruscitti/huayra-mu/raw/master/preview/preview.png)

## Características

 - Soporta la creación de plantillas para html5, ember, revealjs y pilas.
 - Genera la estructura del paquete para debian y huayra.
 - Incorpora scripts para editar la aplicación en modo live-reload.
 - Tiene una bateria de [tests](https://travis-ci.org/hugoruscitti/huayra-mu).
 - No afecta la capa de ozono.

## Instalación

Simplemente escribí este comando:

    npm install huayra-mu

O si estás en versiones posteriores a huayra 2.2 con el comando:

    sudo apt-get install huayra-mu

## Instalación desde el repositorio

Si lo tuyo es usar la "última" versión del software, o querés
desarrollar cosas nuevas para huayra-mu, podés seguir estos
pasos:

Lo primero que tenes que hacer es clonar el repositorio con este
comando:

	git clone https://github.com/hugoruscitti/huayra-mu

Después, hay que ingresar en el directorio de la aplicación e instalar
las dependencias para que todo funcione correctamente. Ejecutá lo
siguiente:

	npm install

Por último, la aplicación se ejecuta así:

	./bin/mu


Eso sí, si querés hacer cambios y subirlos, mejor hacé una copia
del repo envíanos tus ``pull requests``.


## Links

- [Página de huayra-mu en npm](https://www.npmjs.com/package/huayra-mu)
- [Los tests del proyecto](https://travis-ci.org/hugoruscitti/huayra-mu/builds)
