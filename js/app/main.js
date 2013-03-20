requirejs.config({
	baseUrl: 'js',

	paths: {
		'backbone': 'lib/backbone/backbone',
		'jquery': 'lib/jquery/jquery-1.9.1',
		'underscore': 'lib/underscore/underscore'
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
		}

	}
});

//Start the app
define([
	'jquery',
	'underscore',
	'backbone'
	], function () {
		console.log("hello I am running")
	});
