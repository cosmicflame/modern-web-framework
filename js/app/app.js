; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
	, 'app/views/ajaxloader'
	, "text!templates/navigation.html"
	, 'i18n!i18n/nls/bundle'
], function(Backbone, _, Router, Splashscreen, AjaxLoader, navigationTemplate, i18n) {

	return Backbone.View.extend({

		template: _.template(navigationTemplate),

		initialize: function() {

			//Create all child pages
			this.pages = {
				"splashscreen": new Splashscreen(),
				"ajaxloader": new AjaxLoader()
			}
		},

		render: function() {

			//Render navigation template
			this.$el.html(this.template({
				i18n: i18n
			}))

			//Render each child page
			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.render().$el)
				page.$el.hide()
			}, this))
		}
	})
});
