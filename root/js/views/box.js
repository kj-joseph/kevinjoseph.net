var app = app || {};

app.BoxGroupView = Backbone.View.extend({
		render: function() {
			var viewthis = this;

			if(viewthis.options.start) {
				console.log("taco");
				this.$el.hide();
			}

			if(!app.config.initialized) {
				var count = 0;
				this.collection.each(function(item) {
						var start = (viewthis.options.start == item.get("panel"))? true : false;
						var box = new app.BoxView({
							model: item,
							count: count,
							parent: this.$el,
							start: start
						});
						app.boxviews[item.get("panel")] = box;
						count++;
				}, this);
				app.config.initialized = true;
			} else {
				if(viewthis.options.start) {
					console.log(viewthis.options.start);
					console.log("pants");
					app.boxviews[viewthis.options.start].expand();
				}
			}
		},
		
		expand: function(box) {
			app.boxviews[box].expand();
		},
		
		collapse: function() {
			Mousetrap.unbind("esc");
			app.router.navigate("");
			$("#appdiv #content").fadeOut(function() {
					$("#appdiv #content>div").hide();
					$("#appdiv #boxes").fadeIn();
			});
		},
		
		initialize: function(options) {
			this.options = options || {};
			this.render();
		}

});

app.BoxView = Backbone.View.extend({
		template: Handlebars.compile($("#box-template").html()),
		className: "box",

		render: function() {
			var viewthis = this;
			
			this.$el.html(this.template(this.model.attributes));
			this.options.parent.append(this.$el);

			if(this.options.start) {
				console.log(this.expand());
			}
		},
		
		events: {
			mouseover: function() {
				this.$el.css({"backgroundColor":"#FFFFFF","cursor":"pointer"});
			},
			mouseout: function() {
				this.$el.css({"backgroundColor":"#CCCCCC","cursor":"auto"});
			},
			click: function() {
				this.expand();
			}
		},
		
		expand: function() {
			var viewthis = this;
			var panel = this.model.get("panel");

			if(!$("#appdiv #content ."+panel).html() || $("#appdiv #content ."+panel+" .error").length > 0) {
				$("#appdiv #content #loading").show();
				var newdiv = $("<div class=\""+panel+"\"/>");
				var closebutton = $("<div class=\"close\"><a href=\"\">close (esc)</a></div>");
				$("#appdiv #content ."+panel).remove();
				$.get(this.model.get("content")+"?cache="+String(Math.floor(Math.random()*100000)),function(content) {
						$(newdiv).html(content).addClass(panel).prepend(closebutton).on("click",".close a",function(e) {
								e.preventDefault();
								app.boxgroup.collapse()
						});
						$("#appdiv #content #loading").hide();
						$("#appdiv #content").append(newdiv);
				}).fail(function() {
						$(newdiv).html("<p>I'm sorry, there has been an error.</p>").addClass("error").addClass(panel).prepend(closebutton);
						$("#appdiv #content #loading").hide();
						$("#appdiv #content").append(newdiv).on("click",".close a",function(e) {
								e.preventDefault();
								app.boxgroup.collapse()
						});
				});
			} else {
				$("#appdiv #content ."+panel).show();
			}

			$("#appdiv #boxes").fadeOut(function() {
					$("#appdiv #content").fadeIn(function() {
							Mousetrap.bind("esc",function(){app.boxgroup.collapse()});
					});
			});
			
			app.router.navigate(panel);

		},
		
		statusChange: function(model,newValue,viewthis) {
			if(newValue) {
				this.expand();
			} else {
				this.collapse();
			};
		},
		
		initialize: function(options) {
			this.options = options || {};
			this.render();
			this.model.on('change:testvar',this.test,this);
		}

});
