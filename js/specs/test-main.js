requirejs.config({
	baseUrl: 'js',

	paths: {
		//Libs
		'backbone': 'lib/backbone/backbone',
		'jquery': 'lib/jquery/jquery-1.9.1',
		'underscore': 'lib/underscore/underscore',

		//App
		'config': 'app/config',

		//Test
		'jasmine': 'lib/jasmine-1.3.1/jasmine',
		'jasmine-html': 'lib/jasmine-1.3.1/jasmine-html'
	},

	shim: {
		'backbone': {
			deps: [
				'underscore'
				, 'jquery'
			],
			exports: "Backbone"
		},
		'underscore': {
			exports: "_"
		},
		'jasmine-html': {
			deps: ['jasmine']
		},
		'jasmine': {
			exports: 'jasmine'
		}

	}
});


define([
	'jasmine'
	, 'jasmine-html'
], function(jasmine) {

	var setupReporters = function (env) {
		env.updateInterval = 1000;
		//Add the HTML reporter
		var htmlReporter = new jasmine.HtmlReporter()
		env.addReporter(htmlReporter)
		env.specFilter = function(spec) {
			return htmlReporter.specFilter(spec)
		}
	}


	var jasmineEnv = jasmine.getEnv()
	setupReporters(jasmineEnv)

	var specs = [
		'specs/config'
	]
	require(specs, function() {
		console.log("hello")
		jasmineEnv.execute()
		console.log("hello")
	})

})
