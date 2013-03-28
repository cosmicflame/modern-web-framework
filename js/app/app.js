define([
	'app/views/splashscreen'
	, 'app/views/ajaxloader'
], function(Splashscreen, AjaxLoader) {

	return Backbone.View.extend({

		initialize: function() {
			this.splashscreen = new Splashscreen()
			this.ajaxloader = new AjaxLoader()
		},

		render: function() {
			this.$el.append(this.splashscreen.render().$el)
			this.$el.append(this.ajaxloader.render().$el)
		}
	})
});
