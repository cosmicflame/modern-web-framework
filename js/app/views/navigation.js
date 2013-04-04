; define([
	"backbone"
	, "underscore"
	, "text!templates/navigation.html"
	, 'config'
	, 'i18n!i18n/nls/bundle'
], function(Backbone, _, template, config, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			_.bindAll(this, 'selectPage')
		},

		render: function() {
			this.$el.html(this.template({
				  i18n: i18n
				, config: config
			}))
			return this
		},

		selectPage: function(page) {
			if(page) {
				_.each(this.$('li'), function(li) {
					$(li).removeClass('active')
				})

				this.$('a[href="#page/' + page + '"]').parent().addClass('active')
			}
		}
	})
});
