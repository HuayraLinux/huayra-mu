# coding: utf-8
import os

def registrar_ruta_data(pilas):
    # Las siguientes dos lineas le indican a pilas que puede cargar
    # recursos desde el directorio 'data' de este juego.
    este_directorio = os.path.dirname(os.path.abspath(__file__))
    ruta_absoluta_al_directorio_data = os.path.join(este_directorio, '..', 'data')
    pilas.utils.agregar_ruta_personalizada(ruta_absoluta_al_directorio_data)
