requirejs.config({
	baseUrl: 'js',

	paths: {
		//Libs
		'backbone': 'lib/backbone/backbone',
		'jquery': 'lib/jquery/jquery-1.9.1',
		'underscore': 'lib/underscore/underscore',

		//App
		'config': 'app/config'
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
	'config'
	, 'app/app'
	, 'jquery'
	, 'underscore'
	, 'backbone',
], function (config, App) {

	new App({
		el: $('.page')
	}).render();
});
