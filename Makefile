test:
	jasmine-node spec

live_test:
	jasmine-node spec --watch lib --autotest --color --growl
