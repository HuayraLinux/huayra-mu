VERSION=0.0.1
NOMBRE="TXT_NOMBRE"

N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${G}TXT_NOMBRE${N}"
	@echo ""
	@echo "  ${Y}Para desarrolladores${N}"
	@echo ""
	@echo "    ${G}iniciar${N}         Instala dependencias."
	@echo "    ${G}ejecutar_linux${N}  Prueba la aplicacion sobre Huayra."
	@echo "    ${G}ejecutar_mac${N}    Prueba la aplicacion sobre OSX."
	@echo ""
	@echo "  ${Y}Para distribuir${N}"
	@echo ""
	@echo "    ${G}publicar${N}        Incrementa la versión."
	@echo "    ${G}crear_deb${N}       Empaqueta para huayra."
	@echo ""


iniciar:
	npm install

ejecutar_linux:
	python src/ejecutar.py

ejecutar_mac:
	python src/ejecutar.py

publicar:
	dch -i

crear_deb:
	dpkg-buildpackage -us -uc
