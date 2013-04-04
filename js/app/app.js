; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
	, 'app/views/ajaxloader'
], function(Backbone, _, Router, Splashscreen, AjaxLoader) {

	return Backbone.View.extend({

		initialize: function() {

			//Create all child pages
			this.pages = {
				"splashscreen": new Splashscreen(),
				"ajaxloader": new AjaxLoader()
			}
		},

		render: function() {
			//Render each child page
			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.render().$el)
				page.$el.hide()
			}, this))
			return this
		}
	})
});
