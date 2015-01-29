actualizar:
	npm install

release:
	./node_modules/.bin/release-it

test:
	./node_modules/.bin/jasmine-node spec

test_mac:
	bin/mu

live_test:
	jasmine-node spec --watch lib --autotest --color --growl
