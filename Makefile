N=[0m
V=[01;32m
A=[01;33m

all:
	@echo ""
	@echo "$(A)Comandos disponibles: $(N)"
	@echo ""
	@echo "  $(V)actualizar$(N)  Actualiza el repositorio e instala las dependencias."
	@echo ""
	@echo "  $(V)release$(N)     Arma una nueva versión y la sube a npm."
	@echo "  $(V)test$(N)        Ejecuta los test de unidad."
	@echo "  $(V)live_test$(N)   Ejecuta los test de unidad de forma continua."
	@echo ""
	@echo "  $(V)test_linux$(N)  Ejecuta sobre linux."
	@echo "  $(V)test_mac$(N)    Ejecuta sobre osx."
	@echo ""
	@echo ""

actualizar:
	git pull
	npm install

release:
	./node_modules/.bin/release-it

test:
	./node_modules/.bin/jasmine-node spec

test_mac:
	bin/mu

test_linux: test_mac

live_test:
	jasmine-node spec --watch lib --autotest --color --growl
