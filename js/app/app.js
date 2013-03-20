define([
	'app/views/splashscreen'
], function(Splashscreen) {

	return Backbone.View.extend({

		initialize: function() {
			this.splashscreen = new Splashscreen()
		},

		render: function() {
			this.$el.append(this.splashscreen.render().$el)
		}
	})
});
