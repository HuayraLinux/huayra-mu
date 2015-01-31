# coding: utf-8
import pilasengine
import mi_actor
import utils

pilas = pilasengine.iniciar()

# Reinicia el juego por completo si se vuelve a grabar este archivo.
pilas.reiniciar_si_cambia(__file__)

# Permite cargar archivos desde el directorio data.
utils.registrar_ruta_data(pilas)

# Creación de los dos actores.
mono = pilas.actores.Mono()
mono.aprender('arrastrable')

mi_actor.MiActor(pilas)


pilas.avisar("Iniciando TXT_NOMBRE")

# Mantiene en ejecución el juego.
pilas.ejecutar()
