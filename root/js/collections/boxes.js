var app = app || {};

app.BoxCollection = Backbone.Collection.extend({
		url: "/data/boxes.json",
		model: app.BoxModel
});