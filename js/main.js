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

		this.app = new App({
			el: $('.page')
		})
		this.app.render()
		this.router = new Router(this.app.pages)
		Backbone.history.start()

		//If we're not on a page yet, default to the Splashscreen page
		if (!this.router.currentPage) {
			this.router.navigate('page/splashscreen', {trigger: true})
		}
	})
});
