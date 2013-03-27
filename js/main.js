//Load in the require.js config file
require(['require-config'], function() {

	//Start the app
	require([
		'config'
		, 'app/app'
		, 'jquery'
		, 'underscore'
		, 'backbone'
	], function (config, App) {

		new App({
			el: $('.page')
		}).render();
	});
});
