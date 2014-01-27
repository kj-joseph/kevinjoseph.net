app.SiteRouter = Backbone.Router.extend({

	routes: {
	
		"*startbox": "startup"
	
	},
	
	startup: function(startbox) {
		console.log(startbox);
		
		if(!app.config.initialized) {
			app.boxes = new app.BoxCollection();
			app.boxes.fetch({success: function(coll){
	
					app.boxviews = {};
					app.boxgroup = new app.BoxGroupView({
							collection: app.boxes,
							el: "#boxes",
							init: true,
							start: startbox
					});
					
			}});
		} else {
			if(startbox && startbox != null && startbox != "") {
				app.boxgroup.expand(startbox);
			} else {
				app.boxgroup.collapse();
			}
		}

	},

});
