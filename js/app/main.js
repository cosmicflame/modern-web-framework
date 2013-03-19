requirejs.config({
	baseUrl: 'js/app',

	paths: {
		lib: '../lib',
		'backbone': '../lib/backbone/backbone',
		'jquery': '../lib/jquery/jquery-1.9.1',
		'underscore': '../lib/underscore/underscore'
	},

	shim: {
		'backbone': {
			deps: ['underscore']
		}
	}
});

//Start the app
define([
	'jquery',
	'underscore',
	'backbone'
	], function ($, _, bb) {
		console.log($, _, bb)
		console.log("hello I am running")
	});
