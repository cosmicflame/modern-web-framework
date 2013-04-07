define([
	'backbone'
	, 'pubsub'
], function(Backbone, pubsub) {
	return Backbone.Router.extend({

		initialize: function(pages) {
			this.pages = pages
		},

		routes: {
			"page/:name": "navigateToPage"
		},

		navigateToPage: function(pageName) {
			var page = this.pages[pageName]
			if (page) {
				if (this.currentPage) {
					this.currentPage.$el.hide()
				}
				this.currentPage = page
				page.$el.show()

				pubsub.pub('navigate:page', pageName)
			}
		}
	})
})
