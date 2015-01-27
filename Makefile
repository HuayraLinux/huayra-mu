test:
	jasmine-node spec

test_mac:
	bin/mu

live_test:
	jasmine-node spec --watch lib --autotest --color --growl
