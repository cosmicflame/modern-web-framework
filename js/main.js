//Load in the require.js config file
; require(['require-config'], function() {

	//Start the app
	require([
		'config'
		, 'app/app'
		, 'app/router'
		, 'backbone'
		, 'jquery'
	], function (config, App, Router, Backbone, $) {

		var app = new App({
			el: $('.page')
		})
		app.render()
		new Router(app.pages)
		Backbone.history.start()
	})
});
