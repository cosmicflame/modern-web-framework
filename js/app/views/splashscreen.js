define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'config'
	, 'text!templates/splashscreen.html'
	], function(backbone, $, _, config, template) {

	return Backbone.View.extend({

		template: _.template(template),

		render: function() {
			this.$el.html(this.template({
				name: config.app.name,
				version: config.app.version
			}))
			return this
		}
	})
});
