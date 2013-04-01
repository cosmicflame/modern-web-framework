; define([
	"backbone"
	, 'app/router'
	, 'app/views/splashscreen'
	, 'app/views/ajaxloader'
], function(Backbone, Router, Splashscreen, AjaxLoader) {

	return Backbone.View.extend({

		initialize: function() {
			this.router = new Router()
			Backbone.history.start()

			this.splashscreen = new Splashscreen()
			this.ajaxloader = new AjaxLoader()
		},

		render: function() {
			this.$el.append(this.splashscreen.render().$el)
			this.$el.append(this.ajaxloader.render().$el)
		}
	})
});
