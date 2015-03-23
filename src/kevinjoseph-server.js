var express = require("express"),
	backbone = require("backbone");
	expapp = express();

expapp.get(/.*/, function (req, res) {
	jsdom = require("jsdom"),
	window = jsdom.jsdom().parentWindow,
	$ = jQuery = require("jquery")(window);
	//res.send("Hello World** !111");
	require("./js/app.js");
});

var server = expapp.listen(11975, function () {

	var host = server.address().address,
		port = server.address().port;

});

