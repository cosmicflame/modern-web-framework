require.config({

	paths: {
		//Test
		'jasmine': 'lib/jasmine-1.3.1/jasmine',
		'jasmine-html': 'lib/jasmine-1.3.1/jasmine-html'
	},

	shim: {
		'jasmine-html': {
			deps: ['jasmine']
		},
		'jasmine': {
			exports: 'jasmine'
		}
	}
});
