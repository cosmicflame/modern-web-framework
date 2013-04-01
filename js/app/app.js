; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/splashscreen'
	, 'app/views/ajaxloader'
	, "text!templates/navigation.html"
	, 'i18n!i18n/nls/bundle'
], function(Backbone, _, Router, Splashscreen, AjaxLoader, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			this.pages = {
				"splashscreen": new Splashscreen(),
				"ajaxloader": new AjaxLoader()
			}

			this.router = new Router(this.pages)
			Backbone.history.start()
		},

		render: function() {

			this.$el.html(this.template({
				i18n: i18n
			}))

			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.render().$el)
				page.$el.hide()
			}, this))

			this.router.navigate("page/splashscreen", {trigger: true})
		}
	})
});
