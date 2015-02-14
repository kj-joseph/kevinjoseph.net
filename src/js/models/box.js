var app = app || {};

app.BoxModel = Backbone.Model.extend({
		
		idAttribute: "panel",
		
		defaults: {
			isFull: false
		}
});