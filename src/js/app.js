var app = app || {};

/*
$(document).on("click", "a[href^='/']",function(e) {
		if(!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
			e.preventDefault();
			href = $(e.currentTarget).attr('href');
			url = href.replace(/^\//,'').replace('\#\!\/','');
				app.router.navigate(url,{trigger: true});
		}
});
*/

$(function() {

		app.data = app.config = {};
		app.config.initialized = false;
		
		app.router = new app.SiteRouter();
		Backbone.history.start({pushState: true});

});
