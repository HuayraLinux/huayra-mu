# coding: utf-8
import pilasengine

class MiActor(pilasengine.actores.Actor):

    def iniciar(self):
        self.x = 100
        self.y = 200
        self.imagen = "mi_actor.png"

    def actualizar(self):
        self.rotacion += 0.5
