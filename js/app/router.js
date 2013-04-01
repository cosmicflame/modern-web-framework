define([
	'backbone'
], function(Backbone) {
	return Backbone.Router.extend({
		routes: {
			"page/:name": "navigateToPage"
		},

		navigateToPage: function(pageName) {
			console.log(pageName)
		}
	})
})